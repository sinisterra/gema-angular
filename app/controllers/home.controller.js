angular.module('Gema')

.controller('HomeCtrl', function($scope, $modal){

	$scope.modalLogin = function(){
		var modalInstance = $modal.open({
			templateUrl: 'app/views/modals/login.modal.html',
			controller: 'LoginCtrl',
			size: 'md'
		})
	}

});