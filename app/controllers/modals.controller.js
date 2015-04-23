angular.module('Gema')
	.controller('ModalSaveEval', function($scope, $modalInstance) {
		$scope.ok = function() {
			console.log('Me pican')
			$modalInstance.close();
		}
	})