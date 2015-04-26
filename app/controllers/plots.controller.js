angular.module('Gema')
	.controller('PlotCtrl', function($scope) {

		$scope.plotAll = function() {
			$scope.plotRadar();
			$scope.plotLine();
		}

		$scope.plotRadar = function() {
			var data = {
				labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
				datasets: [{
					label: "Última Evaluación",
					fillColor: "rgba(205,220,57,0.2)",
					strokeColor: "rgba(205,220,57,1)",
					pointColor: "rgba(205,220,57,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(244,67,54,1)",
					data: [28, 48, 40, 19, 96, 27, 100]
				}, {
					label: "Promedio",
					fillColor: "rgba(62, 180, 137,0.2)",
					strokeColor: "rgba(62, 180, 137,1)",
					pointColor: "rgba(62, 180, 137,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(0,191,165,1)",
					data: [65, 59, 90, 81, 56, 55, 40]
				}]

			};
			//llamar a un servicio que devuelva los labels y los datos

			//reemplazar data.labels y data.data

			var ctx = document.getElementById("plotRadar").getContext("2d");

			var radarChart = new Chart(ctx).Radar(data, {
				pointDot: false
			});
		}

		$scope.plotLine = function() {

			//llamar a un servicio que devuelva los labels y los datos

			// este código simula las calificaciones
			var l = Math.round(10 + Math.random() * 15)
			var resultados = []
			for(var i=0; i<l; i++){
				resultados.push(Math.round(40 + Math.random() * 60))
			}

			function r(a,b){return a>b?[]:[a].concat(r(++a,b))}


			var calcularPromedios = function(resultados) {
				var promedios = [];
				for (var i = 0; i < resultados.length; i++) {
					//promediar desde 0 hasta i
					var suma = 0;
					for (var j = 0; j <= i; j++) {
						suma += resultados[j]
					}

					var p = Math.round(suma / j);
					promedios[i] = p;
				}

				return promedios;
			}

			var promedios = calcularPromedios(resultados);


			var data = {
				labels: r(1,l),
				datasets: [{
					label: "Promedio",
					fillColor: "rgba(62, 180, 137,0.2)",
					strokeColor: "rgba(62, 180, 137,1)",
					pointColor: "rgba(62, 180, 137,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(62, 180, 137,1)",
					data: promedios,
				}, {
					label: "Última Evaluación",
					fillColor: "rgba(205,220,57,0.2)",
					strokeColor: "rgba(205,220,57,1)",
					pointColor: "rgba(205,220,57,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(205,220,57,1)",
					data: resultados
				}]
			};
			//llamar al servicio y reemplazar data.labels y data.data

			//graficar
			var ctx = document.getElementById("plotLine").getContext("2d");
			var myLineChart = new Chart(ctx).Line(data);

		}

		$scope.plotAll();
	})