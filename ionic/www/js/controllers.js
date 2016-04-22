angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, $cordovaSocialSharing, $timeout, $cordovaInAppBrowser, $window, localstorage, AppService, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.doShare = function() {
    console.log('in doShare method')
    var message = "I'm at #barcampblr. Looking forward to it!"
    $cordovaSocialSharing
      .share(message, null, null, null) // Share via native share sheet
      .then(function(result) {
        console.log('Shared!')
      }, function(err) {
        console.log('Error')
      });
  };

  function isValid(url) {
    if (url.startsWith("bcbapp")) {
      return true;
    }
    return false;
  };

  function getLoginParams(url) {
    var login = {
      user_name: "",
      id: ""
    };
    try {
      if (!isValid(url)) {
        return login;
      } else {
        var search = url.substr(url.indexOf("?") + 1);
        var params = search.split("&");
        var p1 = params[0].split("=");
        var p2 = params[1].split("=");
        if (p1[0] === "id") {
          login.user_name = p1[1];
        }
        if (p2[0] == "sid") {
          login.id = p2[1];
        }
      }
    } catch (e) {
      console.log("Error parsing url");
    }
    return login;
  };

  function urlChanged(url) {
    console.log("urlChanged " + url);
    if(isValid(url)) {
      var login_details = getLoginParams(url);
      //alert(login_details.user_name + " " + login_details.id);
      /*
      $state.transitionTo($state.current, $state.params, {
        reload: true,
        inherit: false,
        notify: true
        });
        */
      localstorage.setObject("login_details", login_details);
      $cordovaInAppBrowser.close();
    }
  };

  $scope.login = function() {
    console.log("in login");
    $rootScope.$on('$cordovaInAppBrowser:loadstart', function(e, event) {
      urlChanged(event.url);
    });

    $rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event) {
      //urlChanged(event.url);
    });

    $rootScope.$on('$cordovaInAppBrowser:loaderror', function(e, event) {
      urlChanged(event.url);
    });

    $rootScope.$on('$cordovaInAppBrowser:exit', function(e, event) {

    });

    var options = {
      location: 'no',
      clearcache: 'no',
      toolbar: 'no'
    };



    var browser = $cordovaInAppBrowser.open('http://barcampbangalore.org/bcb/wp-login_android.php?redirect_to=http%3A%2F%2Fbarcampbangalore.org%2Fbcb%2Fwp-android_helper.php%3Faction%3Dauth', '_blank', options)
      .then(function(event) {
        // success
        console.log("success " + event);
      })
      .catch(function(event) {
        // error
        console.log("failed " + event);
      });

  };

  $scope.openTwitter = function(url) {

    var options = {
      location: 'no',
      clearcache: 'no',
      toolbar: 'no'
    };

    $rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event) {
      $cordovaInAppBrowser.executeScript({
        file: 'twitter_clean.js'
      });
    });

    var url = "https://twitter.com/search?q=barcampbng%20OR%20%22barcamp%20bangalore%22%20OR%20%23barcampblr%20OR%20barcampblr";
    var browser = $cordovaInAppBrowser.open(url, '_blank', options)
      .then(function(event) {
        // success
        console.log("success " + event);
      })
      .catch(function(event) {
        // error
        console.log("failed " + event);
      });

  };

  $scope.isAuthenticated = function() {
    return AppService.isAuthenticated();
  };

  $scope.logout = function() {
  AppService.logout();
  };

})

.controller('HomeCtrl', function($scope, $rootScope, $http, AppService, localstorage, $ionicLoading) {

  $scope.errorData = false;

  $scope.getItemColor = function(slot) {
    if (slot.type == "fixed" && slot.name == "Techlash") {
      return "assertive-bg fixed-slot";
    } else if (slot.type == "fixed") {
      return "energized-bg fixed-slot";
    } else {
      return "positive-bg";
    }
  };

  //var localData = localstorage.getObject("localData");
  //var localStorage = localstorage.getObject("localData");
  //console.log(localStorage);

  // get local data first if present
  //$rootScope.data = localStorage["data"];
  $scope.data = AppService.getDataLocal();

  // seek data from the server.
  $ionicLoading.show({
      template: 'Getting sessions ...'
    });

  var getDataAsync = AppService.getDataServer();
   getDataAsync.then(
    function success(message) {
      console.log("session data obtained");
      $scope.data = $rootScope.data;
      $scope.success_message = message;
      $ionicLoading.hide();
    },
    function failed(message) {
      console.log("session data failed");
      $scope.error_message = message;
      $ionicLoading.hide();
      if(!$rootScope.data) {
        $scope.errorData = true;
      }
    }
  );
/*
  var userSessionAsync = AppService.getUserSessions();
  userSessionAsync.then(
    function success(message) {
      console.log("user sessions obtained");
    },
    function failed(message) {
      console.log("user sessions failed");
    }
  );
  */
  /*
  if (angular.isUndefined(localData["date"])) {
    $scope.getDataServer();
  } else {
    }
  */

})

.controller('SlotCtrl', function($scope, $stateParams, AppService) {

  var slot = AppService.getSlot($stateParams.slotId);

  if (angular.isUndefined(slot)) {
    console.log('No slot id');
    return;
  }

  if (slot['type'] == 'session') {
    $scope.startTime = slot.startTime;
    $scope.endTime = slot.endTime;
    $scope.slotName = slot.name;
    $scope.sessions = slot['sessions'];
  }
  $scope.slotId = $stateParams.slotId
})

.controller('ShareCtrl', function($scope, $cordovaSocialSharing) {
  console.log('Share controller')
  var message = "I'm at #barcampblr. Looking forward to it!"
  $cordovaSocialSharing
    .share(message, null, null, null) // Share via native share sheet
    .then(function(result) {
      console.log('Shared!')
    }, function(err) {
      console.log('Error')
    });

})

.controller('SessionCtrl', function($scope, $sce, $stateParams, $cordovaSocialSharing, AppService) {
  console.log('Single session controller')
  console.log('Slot id: ' + $stateParams.slotId + ' Scope id:' + $stateParams.sessionId );
  //console.log(data['slots'][3]);
  $scope.session = AppService.getSession($stateParams.slotId, $stateParams.sessionId);

  $scope.shareSession = function() {
    $cordovaSocialSharing
      .share($scope.session.title, "Session at #barcampblr", null, $scope.session.permalink) // Share via native share sheet
      .then(function(result) {
        console.log('Shared!')
      }, function(err) {
        console.log('Error')
      });
  };

})

.controller('VenueCtrl', function($scope) {})

.controller('VenueMapCtrl', function($scope) {})

.controller('AboutCtrl', function($scope) {})

.controller('LoginCtrl', function($scope) {})

.controller('TweetCtrl', function($scope, $cordovaInAppBrowser) {});
