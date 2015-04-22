angular.module('Gema')
.controller('LoginCtrl', function($scope, $state, $modalInstance){
	$scope.login = function(){
		if(Math.random() > 0.5){
			//comprobar Auth
			$state.go('dashboard')
			$modalInstance.close();
		}
		else{
			$scope.errorMessages = {}
		}
	}
});