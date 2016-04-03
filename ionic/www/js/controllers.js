angular.module('starter.controllers', [])

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
})



.controller('HomeCtrl', function($scope) {
   $scope.slots =  data.slots;
   console.log(data.slots);
  //$scope.slots = getjson();

  $scope.getItemColor = function(slot) {

    if(slot.type == "fixed" && slot.name == "Techlash") {
      return "assertive-bg";
    }
    else if(slot.type == "fixed") {
      return "energized-bg";
    }
    else {
      return "positive-bg";
    }

  }
})

.controller('SlotCtrl', function($scope, $stateParams) {
    var slotName = data['slots'][$stateParams.slotId]['name']
    var slotType = data['slots'][$stateParams.slotId]['type']
    var slotId = data['slots'][$stateParams.slotId]['id']
    var startTime = data['slots'][$stateParams.slotId]['startTime']
    var endTime = data['slots'][$stateParams.slotId]['endTime']

    console.log('Slot controller');
    console.log('Slot details: slot id: ' + slotId + ' Name:' + slotName + ' Type:' + slotType
                + ' Start time:' + startTime + ' End time:' + endTime);

    var slot = data['slots'][$stateParams.slotId];
    if (slot['type'] == 'session') {
      $scope.startTime = slot.startTime;
      $scope.endTime = slot.endTime;
      $scope.slotName = slot.name;
      $scope.sessions = data['slots'][$stateParams.slotId]['sessions'];
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

.controller('SessionCtrl', function($scope, $sce, $stateParams) {
    console.log('Single session controller')
    console.log('Slot id: ' + $stateParams.slotId + ' Scope id:' + $stateParams.sessionId );
    console.log(data['slots'][3]);
    sessions =  data['slots'][$stateParams .slotId]['sessions'];
    iCount = 0;
    for(; iCount < sessions.length; iCount++){
        if(sessions[iCount].id == $stateParams.sessionId){
            break;
        }
        console.log(iCount);
    }
    console.log(iCount);
    if(iCount < sessions.length){
        $scope.session = data['slots'][$stateParams .slotId]['sessions'][iCount];
        $scope.slotId = $stateParams.slotId;
        console.log($scope);
    }
});
