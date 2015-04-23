angular.module('Gema')

.controller('UserCtrl', function($scope, $state){
	$scope.login = function(){

	}

	$scope.logout = function(){
		$state.go('home')
	}

	$scope.user = {
		'name': 'Juan Pérez',
		'role': 'Estudiante',
	}
})