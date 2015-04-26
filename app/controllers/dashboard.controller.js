angular.module('Gema')

.controller('DashboardCtrl', function($scope) {
	$scope.user = {
		'name': 'Santiago Sinisterra',
		'role': 'Estudiante',
		'average': Math.ceil(Math.random() * 50) + 50,
		'pending': {
			'type': 's',
			'end': 1430200001, //timestamp unix
		},
		'next': 'p',
		'resultados': [{
			'tipo': 's',
			'correctas': 100,
			'total': 120,
			'pct': 84,
			'id': 5,
			'fecha': '1430000001'
		}, {
			'tipo': 'p',
			'correctas': 60,
			'total': 120,
			'pct': 50,
			'id': 6,
			'fecha': '1429900000'
		}, {
			'tipo': 's',
			'correctas': 80,
			'total': 120,
			'pct': 66,
			'id': 9,
			'fecha': '1429000000'
		}, ]
	}


});