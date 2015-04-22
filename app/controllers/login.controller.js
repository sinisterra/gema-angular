angular.module('Gema')
.controller('LoginCtrl', function($scope, $state, $modalInstance){
	$scope.login = function(){
		$state.go('dashboard')
		$modalInstance.close();
	}
});