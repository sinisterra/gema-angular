angular.module('Gema')

.controller('LogoutCtrl', function($scope, $state){
	$scope.logout = function(){
		$state.go('home')
	}
})