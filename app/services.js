angular.module('Gema')
	.service('LoginService', function($state){
		return {
			login: function(){
				$state.go('logout')
			}
		}
	})