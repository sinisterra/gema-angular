angular.module('Gema')
.controller('HomeCtrl', function($scope, $modal){
	$scope.modalLogin = function(){
		var modalInstance  = $modal.open({
			templateUrl: 'app/views/login.modal.html',
			controller: 'ModalLoginCtrl',
			size: 'md'
		})
	}
});