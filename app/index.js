angular.module('Gema', ['ui.router', 'ui.bootstrap'])

.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'app/views/home.html',
			controller: 'HomeCtrl',
		})
		.state('dashboard',{
			url: '/dashboard',
			templateUrl: 'app/views/dashboard.html',
			controller: 'DashboardCtrl'
		})

});