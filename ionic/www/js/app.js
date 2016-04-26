// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var starter = angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers', 'ngCordova', 'utils', 'ngMockE2E', 'mockData'])

var prod_url = 'https://barcampbangalore.org/bcb/schadmin/android.json';
var test_url = 'http://192.168.2.2:8080/';

starter.constant('GC', {JSON_URL : prod_url
});

starter.run(function($ionicPlatform, $rootScope, AppService, mockData, $httpBackend, $state, GC) {


//  $httpBackend.whenGET(GC.JSON_URL).respond(
//    mockData.getSessionDataSuccess()
//  );

//  $httpBackend.whenGET(/https\:\/\/barcampbangalore.org\/bcb\/wp-android_helper\.php\?action=getuserdata.*/).respond(
//   mockData.getUserDataSuccess()
//  );

  $httpBackend.whenGET(/.*/).passThrough(); // Requests for template are handled by the real

  $ionicPlatform.ready(function() {

      // Enable to debug issues.
      // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

      $rootScope.$on('$cordovaLocalNotification:click', function(event, notification, state) {
        $state.go("app.session", {slotId:AppService.getSlotIdFromSessionId(notification.id) , sessionId:notification.id});
      });

      var notificationOpenedCallback = function(jsonData) {

        console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));

        $rootScope.$broadcast('app:notification', jsonData);

        var title = jsonData["additionalData"]["title"];
        var message = jsonData["message"];

        if(title.toLowerCase() === "sessions updated") {
          console.log("getting the server data");
          AppService.getDataServer();

          console.log("getting the user sessions");
          AppService.getUserSessionsServer()
          .then(function success(response) {AppService.addNotificationsForSessions()},
            function failed(response) { console.log("Failed to get the user sessions"); } );
        }

        console.log(" title " + title + " message " + message);
        AppService.addUpdate(title, message);

      };

      window.plugins.OneSignal.init("2792e7dc-0325-491e-9a97-0da17678d381",
                                     {googleProjectNumber: "486916557852"},
                                     notificationOpenedCallback);

      // Show an alert box if a notification comes in when the user is in your app.
      window.plugins.OneSignal.enableInAppAlertNotification(true);

    /*
    var push = new Ionic.Push({
      "debug": true
    });

    push.register(function(token) {
      //alert(token.token);
      console.log("Device token: " + token.token ,token.token);
      push.saveToken(token);
    });
    */
    /*
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    */
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'templates/search.html'
        }
      }
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('app.slots', {
      url: '/slots/:slotId',
      views: {
        'menuContent': {
          templateUrl: 'templates/sessionslist.html',
          controller: 'SlotCtrl'
        }
      }
    })

    /*
    .state('app.tweets', {
      url: '/tweets',
      views: {
        'menuContent': {
          templateUrl: 'templates/tweets.html',
          controller: 'TweetCtrl',
          cache: false
        }
       }
     })
     */

    .state('app.venue', {
      url: '/venue',
      views: {
        'menuContent': {
          templateUrl: 'templates/venue.html',
          controller: 'VenueCtrl'
        }
       }
     })

    .state('app.map', {
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html',
          controller: 'VenueMapCtrl'
        }
       }
     })

    .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html',
          controller: 'AboutCtrl'
        }
       }
    })

    .state('app.updates', {
      url: '/updates',
      views: {
        'menuContent': {
          templateUrl: 'templates/update.html',
          controller: 'UpdateCtrl'
        }
       }
    })

    .state('app.share', {
      url: '/share',
      cache: false
    })

    /*
    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
        }
      }
    })
    */

    .state('app.session', {
      url: '/slots/:slotId/:sessionId',
      views: {
        'menuContent': {
          templateUrl: 'templates/session.html',
          controller: 'SessionCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
