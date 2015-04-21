angular.module('Gema')
.controller('ModalLoginCtrl', function($scope, $modalInstance){
	$scope.login = function(){
		$modalInstance.close();
	}
});