angular.module('ng-screensaver-demo',['ng-screensaver'])
.controller('Home',['$scope',function($scope){
	$scope.sleeping = false;

	$scope.onWake = function(){
		console.log("Waking");
		$scope.sleeping = false;
	};

	$scope.onSleep = function(){
		$scope.sleeping = true;
	};
}]);