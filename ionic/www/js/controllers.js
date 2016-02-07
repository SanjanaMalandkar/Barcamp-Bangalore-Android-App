angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('SlotsCtrl', function($scope) {
   $scope.slots =  $data.slots;
   console.log($data.slots);
  //$scope.slots = getjson();
})

.controller('SlotCtrl', function($scope, $stateParams) {

    var slotName = $data['slots'][$stateParams.slotId]['name']
    var slotType = $data['slots'][$stateParams.slotId]['type']
    var slotId = $data['slots'][$stateParams.slotId]['id']
    var startTime = $data['slots'][$stateParams.slotId]['startTime']
    var endTime = $data['slots'][$stateParams.slotId]['endTime']

    console.log('Slot controller')
    console.log('Slot details: slot id: ' + slotId + ' Name:' + slotName + ' Type:' + slotType
                + ' Start time:' + startTime + ' End time:' + endTime)
    if ($data['slots'][$stateParams.slotId]['type'] == 'session') {
      $scope.sessions = $data['slots'][$stateParams.slotId]['sessions'];
    }
    $scope.slotId = $stateParams.slotId;

})

.controller('SessionCtrl', function($scope, $sce, $stateParams) {
    console.log('Single session controller')
    console.log('Slot id: ' + $stateParams.slotId + ' Scope id:' + $scope.slotId )
    $scope.session = $data['slots'][$scope.slotId]['sessions'][$stateParams.slotId];
    $scope.slotId = $stateParams.slotId;
});


