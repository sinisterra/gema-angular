angular.module('Gema')
	.controller('ModalEvalSaveCtrl', function($scope, $modalInstance) {
		$scope.ok = function() {
			$modalInstance.close();
			//llamar al método del service que guarde los cambios
		}
	})

.controller('ModalEvalSaveExitCtrl', function($scope, $state, $modalInstance) {
	$scope.exit = function() {
		$modalInstance.close();
		//llamar al método del service que guarde los cambios
		$state.go('dashboard')
	}
	$scope.continue = function(){
		$modalInstance.dismiss();

	}
})

.controller('ModalEvalGradeCtrl', function($scope, $state, $modalInstance) {
	$scope.grade = function() {
		$modalInstance.close();
		//llamar al método de un service que evalúe 
		$state.go('revisar')
	}
	$scope.continue = function(){
		$modalInstance.dismiss();
	}
})