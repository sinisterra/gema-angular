angular.module('Gema', [
	'ui.router',
	'ui.bootstrap'
	])
.config(function($urlRouterProvider, $stateProvider){
	$stateProvider
	.state('home',{
		url:'/home',
		templateUrl: 'app/views/home.html',
		controller: 'HomeCtrl'
	})
	.state('dashboard', {
		url:'/dashboard',
		views: {
			'':{
				templateUrl: 'app/views/dashboard.html',
				controller: 'DashboardCtrl'
			},
			'pendingEval@dashboard':{
				templateUrl: 'app/views/pendingEval.card.html',
			},
			'newEval@dashboard':{
				templateUrl: 'app/views/newEval.card.html'
			},
			'lastEval@dashboard':{
				templateUrl: 'app/views/lastEval.card.html'
			},
		}
	})
	.state('reviewEval',{
		url:'/review/:evalId',
		templateUrl:'app/views/reviewEval.html',
		controller:'ReviewEvalCtrl'
	})
	.state('new',{
		url:'/new',
		templateUrl: 'app/views/eval.html',
		controller:'EvalCtrl',
	})


	$urlRouterProvider.otherwise('/home');

});