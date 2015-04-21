angular.module('Gema')
.controller('DashboardCtrl', function($scope){
	$scope.user = {
		pending: true,
		last: {
			'finished': 'hace 10 minutos',
			'result': {
				'correct': 100,
				'total': 120,
				'pct': 75,
			}

		}
	}
});