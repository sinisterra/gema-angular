angular.module('Gema')

.controller('DashboardCtrl', function($scope){
	$scope.user = {
		'name': 'Santiago Sinisterra',
		'role': 'Estudiante',
		'average': Math.ceil(Math.random()*50) + 50,
		'pending': {
			'type': 's',
			'start': 'hace 10 minutos'
		},
		'next': 'p',
		'previous': [
		{},{},{}]
	}


});