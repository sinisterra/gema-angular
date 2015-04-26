angular.module('Gema')
	.controller('ContestarCtrl', function($scope, $modal, $state, $timeout) {
		$scope.eval = {
			'id': 120,
			'tipo': 's',
			'fechaLimite': 1431230263, //al llegar a esta fecha hay que mandarlo a calificar
			'materias': [{
				'id': 'FIS',
				'nombre': 'Física',
				'preguntas': [{
					'qid': '120',
					'pregunta': '¿Cuál es la respuesta A?',
					'sel': 0,
					'recurso': {
						'url': 'https://www.facebook.com',
					},
					'respuestas': ['A', 'B', 'C', 'D']
				}, {
					'qid': '120',
					'pregunta': '¿Cuál es la respuesta A?',
					'sel': 0,
					'respuestas': ['A', 'B', 'C', 'D']
				}, {
					'qid': '120',
					'pregunta': '¿Cuál es la respuesta A?',
					'sel': 0,
					'respuestas': ['A', 'B', 'C', 'D']
				}]
			}]
		}

		$scope.mytimeout = {}


		$scope.onTimeout = function() {
			if ($scope.eval.fechaIniciado <= $scope.eval.fechaLimite) {
				$scope.eval.fechaIniciado++;
				$scope.mytimeout = $timeout($scope.onTimeout, 1000);
			}
			else {
				// enviar datos y redirigir al estado revisar({id: <eval.id>})
				$scope.stop($scope.mytimeout)
				$state.go('revisar', {
					'id': $scope.eval.id
				})
			}
		}

		//cuando inicie la evaluación, hay que llamar a este método
		$scope.iniciar = function() {
			$scope.eval.fechaIniciado = Math.round(+new Date() / 1000);
			console.log($scope.eval.fechaIniciado)
			console.log($scope.eval.fechaLimite)
			$scope.mytimeout = $timeout($scope.onTimeout, 1000);
		}

		//si se envía a calificar, o cambia de vista
		$scope.stop = function() {
			$timeout.cancel($scope.mytimeout);
		}

		$scope.iniciar();

		$scope.save = function() {
			var modalInstance = $modal.open({
				'templateUrl': 'app/views/modals/evalSave.modal.html',
				'controller': 'ModalEvalSaveCtrl',
				'size': 'sm',
			})
		}

		$scope.grade = function() {
			var modalInstance = $modal.open({
				'templateUrl': 'app/views/modals/evalGrade.modal.html',
				'controller': 'ModalEvalGradeCtrl',
				'size': 'sm'
			})
		}

		$scope.saveAndExit = function() {
			var modalInstance = $modal.open({
				'templateUrl': 'app/views/modals/evalSaveExit.modal.html',
				'controller': 'ModalEvalSaveExitCtrl',
				'size': 'sm'
			})
		}

	})