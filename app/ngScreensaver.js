angular.module('ng-screensaver',[])
.directive('ngScreensaver',['$document','$timeout',function($document,$timeout){
	return {
		restrict:'A',
		scope:false,
		link: function($scope, element, attrs) {

			var cancelTimeout = null;
			var sleeping = false;
			var sleepTimeout = attrs.sleepTimeout ? parseInt(attrs.sleepTimeout,10) : 10000;

			var reset = function(){
				if(cancelTimeout){
					$timeout.cancel(cancelTimeout);
				}

				cancelTimeout = $timeout(function(){
					sleeping = true;
					if(attrs.onSleep){
						$scope.$eval(attrs.onSleep);
					}
				},sleepTimeout);
			};

			$document.on('click',function(){
				reset();
				if(sleeping){
					sleeping = false;
					if(attrs.onWake){
						$scope.$eval(attrs.onWake);
					}
					$scope.$apply();
				}
			});

			reset();			
        }
	}
}]);