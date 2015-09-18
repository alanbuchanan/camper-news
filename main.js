var app = angular.module('cn', ['angularMoment', 'infinite-scroll']);

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get('http://www.freecodecamp.com/news/hot')
	.success(function(response) {

	  $scope.response = response;
	  $scope.myData = $scope.response.slice(0, 10);

	  $scope.loadMore = function() {
		if (!$scope.myData || $scope.response.length <= $scope.myData.length)
		  return;
		var last = $scope.myData.length;
		for (var i = last; $scope.myData.length < $scope.response.length && i < last+10; i++) {
		  $scope.myData.push($scope.response[i]);
		}
	  };
	});
}]);