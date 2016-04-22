var utilsModule = angular.module('utils', []);

utilsModule.factory('localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}]);

utilsModule.factory('AppService', ['$rootScope', '$http', 'localstorage', '$cordovaLocalNotification', '$q', function($rootScope, $http, localstorage, $cordovaLocalNotification, $q) {
  var AppService = {};

  function getJSON(deferred) {
    $http({
      method: 'GET',
      url: 'https://barcampbangalore.org/bcb/schadmin/android.json'
    }).then(function successCallback(response) {
      console.log("Got the session data");

      //$scope.slots = $rootScope.data.slots;
      console.log(response.headers());
      console.log(response.headers("Last-Modified") + " " + response.headers("etag"));

      var localData = {};

      if (angular.isUndefined(response.headers("Last-Modified"))) {
        localData["date"] = new Date();
      } else {
        localData["date"] = new Date(response.headers("Last-Modified"));
      }

      if (response.data["status"] !== "have stuff") {
        console.log("Slots not yet decided");
        $rootScope.data_status = "slots_undecided";
        // Not saving the data if slots are set as undecided.
        localData["data"] = "";
      } else {
        console.log("slots decided" + response.data);
        $rootScope.data_status = "slots_set";
        $rootScope.data = response.data;
        localData["data"] = response.data;
      }
      localstorage.setObject("localData", localData);
      deferred.resolve("Got the data");
    }, function errorCallback(response) {
      console.log("Unable to get the data " + response.data + " " + response.status );
      //$scope.errorData = true;
      deferred.reject("Sorry unable to get the data " + response );
      // console.log("Unable to get the data");
    });
  };


  /*
  // Not using this currently, otherwise would just retrieve the header instead
  // of the whole data.
  AppService.checkModified = function(deferred) {
    $http.head(
      'https://barcampbangalore.org/bcb/schadmin/android.json'
    ).then(function successCallback(response) {
      console.log("Got the headers");
      console.log(response.headers());
      var resp_date = new Date(response.headers("Last-Modified"));
      var localData = localstorage.getObject("localData");
      console.log(typeof localData["date"]);
      var local_date = new Date(localData["date"]);
      if (resp_date.getTime() > local_date.getTime()) {
        console.log("getting the data again");
        getDataServer(deferred);
      }
    }, function errorCallback(response) {
        deferred.reject("Sorry, unable to get the data " + response);
    });
  };
  */

  AppService.getDataServer = function() {
      var deferred = $q.defer();
      getJSON(deferred);
      return deferred.promise;
  };

  AppService.getDataLocal = function() {
    return localstorage.getObject("localData");
  };

  AppService.getSlot = function(slotId) {
    data = localstorage.getObject("localData");
    return data["data"]["slots"][slotId];
  }

  AppService.getSession = function(slotId, sessionId) {

    var data = AppService.getDataLocal();
    console.log(slotId, sessionId);
    var slot = this.getSlot(slotId);
    var sessions = slot['sessions'];
    var iCount = 0;
    for (; iCount < sessions.length; iCount++) {
      if (sessions[iCount].id == sessionId) {
        break;
      }
      //console.log(iCount);
    }

    console.log(iCount);
    var session;
    if (iCount < sessions.length) {
      session = sessions[iCount];
      //$scope.slotId = $stateParams.slotId;
      //console.log($scope);
    }
    return session;
  };


  AppService.getUserSessions = function() {

    var deferred = $q.defer();

    var login_details = localstorage.getObject("login_details");

    if(this.isAuthenticated() == false)
      return;

    url_user = 'https://barcampbangalore.org/bcb/wp-android_helper.php?action=getuserdata&' + 'userid=' + login_details.user_name + '&userkey=' + login_details.id;

    $http({
      method: 'GET',
      url: url_user
    }).then(function successCallback(response) {
      console.log("Got the data for user sessions " + response);
      var data = response['data'];
      localstorage.setObject("user_sessions", data);
      deferred.resolve("got the sessions");
      //var sessions = JSON.parse(data);
      //addNotifications(sessions);
    },
    function errorCallback(response) {
      console.log("Error in getting the data " + response);
      deferred.reject("Sorry, error in retrieving sessions " + response);
    });

    return deferred.promise;
  };

  function getOffset(startTime) {
    var now = new Date().getTime();
    var h_str = startTime.substring(0,2);
    var m_str = startTime.subString(2);
    var hours = parseInt(h_str);
    var minutes = parseInt(m_str);
    var barcamp_date = new Date(2016, 4, 30, hours, minutes, 0);
    return barcamp_date.getTime() - now;
  };

   function scheduleNotification(time_offset, id, title, description) {
    $cordovaLocalNotification.schedule({
      id: id,
      title: title,
      text: description,
      at: time_offset
    }).then(function (result) {

    });
    };

  AppService.addNotificationsForSessions = function() {

    var user_sessions = localstorage.getObject("user_sessions");
    var total_sessions = localstorage.getObject("localData")["data"];

    if(angular.isUndefined(total_sessions) | angular.isUndefined(user_sessions))
      return;

    var sessions = [];
    for(slot in total_sessions['slots']) {
      for(session in slot['sessions']) {
        sessions[id] = { id : session.id, startTime : slot.startTime,
          title : session.title, location : session.location, presenter : session.presenter };
      }
    }

    // Cancel all the previous notifications, if any of them are set.
    $cordovaLocalNotification.cancelAll().then(function (result) {
        console.log("All notifications are cancelled");
      });

    for(session in user_sessions) {
      var us = sessions[session.id];
      var time_offset = getOffset(us.startTime);
      if(time_offset >= 0 )
        scheduleNotification(time_offset, us.id, us.title, us.location + " is hosting " + us.title + " by " + us.presenter);
    }

  };

  AppService.isAuthenticated = function() {
    var login_details = localstorage.getObject("login_details");
    //console.log(login_details);
    if(angular.isUndefined(login_details.user_name) || angular.isUndefined(login_details.id))
      return false;
    return true;
  };

  AppService.logout = function() {
    var login_details = {};
    localstorage.setObject("login_details", login_details);
  };

  return AppService;
}]);
