angular.module('Gema')
.controller('LoginCtrl', function($scope, $state, $modalInstance){
	$scope.login = function(){
		
			//comprobar Auth
			$state.go('dashboard')
			$modalInstance.close();
		
	}
});