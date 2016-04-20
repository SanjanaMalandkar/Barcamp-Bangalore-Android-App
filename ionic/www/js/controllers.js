angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, $cordovaSocialSharing, $timeout, $cordovaInAppBrowser, $window, localstorage) {

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
      alert(login_details.user_name + " " + login_details.id);
      localstorage.setObject(login_details);
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

})

.controller('HomeCtrl', function($scope, $rootScope, $http, syncService, localstorage) {

  $scope.errorData = false;

  $scope.$watch('data', function() {
    console.log("Scope data updated from rootscope");
    $scope.data = $rootScope.data;
  }, true);

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
  var localStorage = localstorage.getObject("localData");
  console.log(localStorage);

  // get local data first if present
  $rootScope.data = localStorage["data"];

  // seek data from the server.
  var getDataAsync = syncService.getData();
   getDataAsync.then(
    function success(message) {
      console.log("session data obtained");
      $scope.success_message = message;
    },
    function failed(message) {
      console.log("session data failed");
      $scope.error_message = message;
    }
  );
/*
  var userSessionAsync = syncService.getUserSessions();
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
    $scope.getData();
  } else {
    }
  */

})

.controller('SlotCtrl', function($scope, $stateParams, $rootScope) {

  //console.log($rootScope.data);

  if (angular.isUndefined( $rootScope.data['slots'][$stateParams.slotId])) {
    console.log('No slot id');
    return;
  }

  var slotName = $rootScope.data['slots'][$stateParams.slotId]['name']
  var slotType = $rootScope.data['slots'][$stateParams.slotId]['type']
  var slotId = $rootScope.data['slots'][$stateParams.slotId]['id']
  var startTime = $rootScope.data['slots'][$stateParams.slotId]['startTime']
  var endTime = $rootScope.data['slots'][$stateParams.slotId]['endTime']

  console.log('Slot controller');
  console.log('Slot details: slot id: ' + slotId + ' Name:' + slotName + ' Type:' + slotType + ' Start time:' + startTime + ' End time:' + endTime);

  var slot = $rootScope.data['slots'][$stateParams.slotId];
  if (slot['type'] == 'session') {
    $scope.startTime = slot.startTime;
    $scope.endTime = slot.endTime;
    $scope.slotName = slot.name;
    $scope.sessions = $rootScope.data['slots'][$stateParams.slotId]['sessions'];
  }
  $scope.slotId = $stateParams.slotId
  console.log("SlotCtrl = " + $scope.slotId);

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

.controller('SessionCtrl', function($scope, $sce, $stateParams, $cordovaSocialSharing, $rootScope) {
  //console.log('Single session controller')
  //console.log('Slot id: ' + $stateParams.slotId + ' Scope id:' + $stateParams.sessionId );
  //console.log(data['slots'][3]);
  var sessions = $rootScope.data['slots'][$stateParams.slotId]['sessions'];
  var iCount = 0;
  for (; iCount < sessions.length; iCount++) {
    if (sessions[iCount].id == $stateParams.sessionId) {
      break;
    }
    //console.log(iCount);
  }
  console.log(iCount);

  if (iCount < sessions.length) {
    $scope.session = $rootScope.data['slots'][$stateParams.slotId]['sessions'][iCount];
    $scope.slotId = $stateParams.slotId;
    //console.log($scope);
  }

  $scope.shareSession = function() {
    $cordovaSocialSharing
      .share($scope.session.title, "Session at #barcampblr", null, $scope.session.permalink) // Share via native share sheet
      .then(function(result) {
        console.log('Shared!')
      }, function(err) {
        console.log('Error')
      });
  };


  /*
  .controller('AppCtrl', function($scope, $cordovaSocialSharing, $timeout) {

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
  */

})

.controller('VenueCtrl', function($scope) {})

.controller('VenueMapCtrl', function($scope) {})

.controller('AboutCtrl', function($scope) {

})

.controller('LoginCtrl', function($scope) {

})

.controller('TweetCtrl', function($scope, $cordovaInAppBrowser) {


  /*

    var options = {
          location: 'yes',
          clearcache: 'no',
          toolbar: 'yes'
        };

        $cordovaInAppBrowser.open('https://twitter.com/search?q=barcampbng%20OR%20%22barcamp%20bangalore%22%20OR%20%23barcampblr%20OR%20barcampblr', '_blank', options)
          .then(function(event) {
            // success
          })
          .catch(function(event) {
            // error
          });
  */
  /*
    $rootScope.$on('$cordovaInAppBrowser:loadstart', function(e, event){

    });

    $rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event){
      // insert CSS via code / file
      $cordovaInAppBrowser.insertCSS({
        code: 'body {background-color:blue;}'
      });

      // insert Javascript via code / file
      $cordovaInAppBrowser.executeScript({
        file: 'script.js'
      });
    });

    $rootScope.$on('$cordovaInAppBrowser:loaderror', function(e, event){

    });

    $rootScope.$on('$cordovaInAppBrowser:exit', function(e, event){

    });
*/

});
