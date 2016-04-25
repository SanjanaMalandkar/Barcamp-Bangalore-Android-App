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
        $rootScope.status_message = response.data["status"];
        $rootScope.data = response.data;
        localData["data"] = response.data;
      } else {
        console.log("slots decided" + response.data);
        $rootScope.data_status = "slots_set";
        $rootScope.status_message = response.data["status"];
        $rootScope.data = response.data;
        localData["data"] = response.data;
      }
      localstorage.setObject("localData", localData);
      deferred.resolve("Got the data");
    }, function errorCallback(response) {
      console.log("Unable to get the data " + response.data + " " + response.status);
      //$scope.errorData = true;
      deferred.reject("Sorry unable to get the data " + response);
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
    console.log(slotId + " " + sessionId);
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
    }
    return session;
  };

  AppService.getSessionFromId = function(sessionId) {

    var data = AppService.getDataLocal();
    console.log(sessionId);
    var session = {};

    var slots = data["data"]["slots"];

    for (var i=0; i<slots.length; i++) {
      var sessions = slots[i]['sessions'];
      if(angular.isUndefined(sessions))
        continue;
      for (var j = 0; j < sessions.length; j++) {
        if (sessions[j].id == sessionId) {
          console.log("session id " + sessions[j].id);
          session = sessions[j];
          return session;
        }
        //console.log(iCount);
      }
    }

    return session;
  };

  AppService.getStartTimeFromSession = function(sessionId) {

    var data = AppService.getDataLocal();
    console.log(sessionId);
    var session = {};

    var slots = data["data"]["slots"];

    for (var i=0; i<slots.length; i++) {
      var sessions = slots[i]['sessions'];
      if(angular.isUndefined(sessions))
        continue;
      for (var j = 0; j < sessions.length; j++) {
        if (sessions[j].id == sessionId) {
          console.log("session id " + sessions[j].id);
          return slots[i].startTime
          //session = sessions[j];
          //return session;
        }
        //console.log(iCount);
      }
    }

    return "";
  };

  AppService.getSlotIdFromSessionId = function(sessionId) {

    var data = AppService.getDataLocal();
    console.log(sessionId);
    var session = {};

    var slots = data["data"]["slots"];

    for (var i=0; i<slots.length; i++) {
      var sessions = slots[i]['sessions'];
      if(angular.isUndefined(sessions))
        continue;
      for (var j = 0; j < sessions.length; j++) {
        if (sessions[j].id == sessionId) {
          console.log("session id " + sessions[j].id);
          return i;
          //session = sessions[j];
          //return session;
        }
        //console.log(iCount);
      }
    }

    return -1;
  };


  AppService.getUserSessionsServer = function() {

    var deferred = $q.defer();
    var login_details = localstorage.getObject("login_details");
    if (this.isAuthenticated() == false)
      deferred.reject("Not logged in yet");

    url_user = 'https://barcampbangalore.org/bcb/wp-android_helper.php?action=getuserdata&' + 'userid=' + login_details.user_name + '&userkey=' + login_details.id;

    $http({
      method: 'GET',
      url: url_user
    }).then(function successCallback(response) {
        console.log("Got the data for user sessions " + response['data']['data']);
        var data = response['data']['data'];
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

  AppService.setUserSessionAttending = function(sessionId) {

    var deferred = $q.defer();
    var login_details = localstorage.getObject("login_details");
    if (this.isAuthenticated() == false) {
      deferred.reject("Not logged in yet");
    }

    url_user = 'https://barcampbangalore.org/bcb/wp-android_helper.php?action=setuserdata&'
    + 'userid=' + login_details.user_name +
    '&userkey=' + login_details.id +
    '&sessionid=' + sessionId +
    '&isattending=' + 'true'

    $http({
      method: 'GET',
      url: url_user
    }).then(function successCallback(response) {
        deferred.resolve("Updated");
        //var sessions = JSON.parse(data);
        //addNotifications(sessions);
      },
      function errorCallback(response) {
        deferred.reject("Sorry, error in updating " + response);
      });

    return deferred.promise;
  };

  function getNotiTime(startTime) {
    console.log("getNotiTime " + startTime);

    //var now = Date.now();
    var h_str = startTime.substring(0, 2);
    var m_str = startTime.substring(2);
    var hours = parseInt(h_str);
    var minutes = parseInt(m_str);
    var barcamp_date = new Date(2016, 3, 30, hours, minutes, 0);
    //return 100;
    //var offset = barcamp_date.getTime() - now;
    //console.log( " getNotiTime " + offset)
    return barcamp_date;
  };

  function scheduleNotification(time_offset, id, title, description) {
    console.log("scheduleNotification " + time_offset);
    $cordovaLocalNotification.schedule({
      id: id,
      title: title,
      text: description,
      at: time_offset
    }).then(function(result) {});
  };

  function isEmpty(obj) {
    return (Object.keys(obj).length === 0 && JSON.stringify(obj) === JSON.stringify({}))
  }

  AppService.addNotificationsForSessions = function() {

    console.log("Adding notifications for sessions");
    var user_sessions = localstorage.getObject("user_sessions");
    if (angular.isUndefined(user_sessions))
      return;

      try {
      // Cancel all the previous notifications, if any of them are set.
      $cordovaLocalNotification.cancelAll().then(function(result) {
        console.log("All notifications are cancelled");
      });
      }
      catch(e) {
        console.log("cancel all failed");
      }

    console.log(user_sessions +  " : " + user_sessions.length);

    for (var i=0; i<user_sessions.length; i++) {
      //console.log(session);
      var us = AppService.getSessionFromId(user_sessions[i].id);
      console.log(us);
      if(isEmpty(us)) {
        console.log("No session found for " + user_sessions[i].id);
        continue;
      }
      var time = getNotiTime(AppService.getStartTimeFromSession(user_sessions[i].id));
      if (time >= 0)
        scheduleNotification(time_offset, us.id, us.title, us.location + " is hosting " + us.title + " by " + us.presenter);
    }

  };

  AppService.addNotification = function(sessionId) {

    console.log("Adding notification for sessionId " + sessionId);
    var us = AppService.getSessionFromId(sessionId);
    console.log(us);
    if(isEmpty(us)) {
      console.log("No session found for " + sessionId);
      return;
    }
    var time_offset = getNotiTime(AppService.getStartTimeFromSession(sessionId));
    if (time_offset >= 0)
      scheduleNotification(time_offset, us.id, us.title, us.location + " is hosting " + us.title + " by " + us.presenter);
  };


  AppService.isAuthenticated = function() {
    var login_details = localstorage.getObject("login_details");
    //console.log(login_details);
    if (angular.isUndefined(login_details.user_name) || angular.isUndefined(login_details.id))
      return false;
    return true;
  };

  AppService.logout = function() {
    var login_details = {};
    localstorage.setObject("login_details", login_details);
  };



  return AppService;
}]);
