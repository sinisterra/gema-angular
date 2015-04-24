angular.module('Gema')

.controller('DashboardCtrl', function($scope){
	$scope.user = {
		'name': 'Santiago Sinisterra',
		'role': 'Estudiante',
		'average': Math.ceil(Math.random()*50) + 50,
		'pending': {
			'type': 's',
			'end': '01:20'
		},
		'next': 'p',
		'previous': [
		{},{},{}]
	}


});