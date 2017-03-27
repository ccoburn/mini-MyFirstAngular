angular.module('friendsList').controller('mainCtrl', function($scope) {

$scope.friends = ['Bob', 'Angela', 'Theresa', 'Thomas', 'Erik', 'Barbara', 'Tyler'];

$scope.addFriend = function(name) {
  $scope.friends.push(name);
};

});
