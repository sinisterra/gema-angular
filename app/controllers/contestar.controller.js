angular.module('Gema')
	.controller('ContestarEvaluacionCtrl', function($scope, $modal) {
		$scope.eval = {
			'data': {
				'type': 's'
			},
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
					'respuestas': [{
						'texto': 'A'
					}, {
						'texto': 'B'
					}, {
						'texto': 'C'
					}, {
						'texto': 'D'
					}, ]
				}, {
					'qid': '120',
					'pregunta': '¿Cuál es la respuesta A?',
					'sel': 0,
					'respuestas': [{
						'texto': 'A'
					}, {
						'texto': 'B'
					}, {
						'texto': 'C'
					}, {
						'texto': 'D'
					}, ]
				}, {
					'qid': '120',
					'pregunta': '¿Cuál es la respuesta A?',
					'sel': 0,
					'respuestas': [{
						'texto': 'A'
					}, {
						'texto': 'B'
					}, {
						'texto': 'C'
					}, {
						'texto': 'D'
					}, ]
				}]
			}, {
				'id': 'BIO',
				'nombre': 'Biología',
				'preguntas': [{}]
			}]
		}


		$scope.save = function(){
			var modalInstance = $modal.open({
				'templateUrl': 'app/views/modals/evalSaved.modal.html',
				'size': 'md'
			})
		}

		$scope.grade = function(){
			var modalInstance = $modal.open({
				'templateUrl': 'app/view/modals/evalGradeConfirm.modal.html',
				'controller': 'ModalSaveEval',
			})
		}

	})