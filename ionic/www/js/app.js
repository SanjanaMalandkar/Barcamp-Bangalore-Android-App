// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers', 'ngCordova', 'utils'])

.run(function($ionicPlatform, $rootScope, AppService) {
  $ionicPlatform.ready(function() {

    // Enable to debug issues.
      // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

      var notificationOpenedCallback = function(jsonData) {
        console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
        //if(jsonData.title.toLowerCase() === "sessions updated") {
          $rootScope.$broadcast('app:notification', {data:jsonData});
        //}
      };

      window.plugins.OneSignal.init("785e0c26-f6e8-419d-adec-6821366ac4a0",
                                     {googleProjectNumber: "432833479921"},
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
