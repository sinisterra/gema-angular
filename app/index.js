Chart.defaults.global.responsive = true;
moment.locale('es')

angular.module('Gema', ['ui.router', 'ui.bootstrap', 'angularMoment'])

.run(function(amMoment) {
    amMoment.changeLocale('es');
})

.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'app/views/home.html',
			controller: 'HomeCtrl',
		})
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: 'app/views/dashboard.html',
			controller: 'DashboardCtrl'
		})
		.state('contestar', {
			url: '/contestar',
			views: {
				'': {
					templateUrl: 'app/views/contestar.html',
					controller: 'ContestarCtrl'
				},
				'instrucciones@contestar': {
					templateUrl: 'app/views/eval/instrucciones.html'
				}
			}
		})
		.state('revisar', {
			url: '/revisar/:id',
			templateUrl: 'app/views/revisar.html',
			controller: 'RevisarCtrl',
		})
		// .state('settings', {
		// 	url: '/settings',
		// 	templateUrl: 'app/views/settings.html',
		// })

});