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
		'resultados': [
		{'tipo': 's','correctas':100,'total':120,'pct':84,'id':5,'fecha':'1430000001'},
		{'tipo': 'p','correctas':100,'total':120,'pct':84,'id':6,'fecha':'1429900000'},
		{'tipo': 's','correctas':100,'total':120,'pct':84,'id':9,'fecha':'1429000000'},
		]
	}


});