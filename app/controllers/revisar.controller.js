angular.module('Gema')
	.controller('RevisarCtrl', function($scope) {
		$scope.eval = {
			'id': 42,
			'correctas': 100,
			'total': 120,
			'pct': 84,
			'tipo': 'p', //p|s
			'fechaIniciado': '',
			'fechaCalificado': '',
			'fechaLimite': '',
			'materias': [{
				'nombre': 'Biología',
				'correctas': 18,
				'total': 20,
				'pct': 90,
				'recomendacion': {
					'domina': ['a', 'b', 'c'],
					'repaso': ['d', 'e', 'f'],
					'noDomina': ['g', 'h', 'i']
				},
				'preguntas': [{
					'pregunta': '¿Cuál es la respuesta A?',
					'recurso': '',
					'correcta': 0,
					'sel':1,
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
			}]
		}
	});