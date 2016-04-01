angular.module("pelisbabel").controller("DetallePeliculaController",
	["$scope","$sce","$routeParams","$location","APIClient","paths",
	function($scope, $sce,$routeParams,$location,APIClient,paths){
		$scope.model = {};
		$scope.trustSrc = function() {
	    	return $sce.trustAsResourceUrl($scope.model.url);
		}
		$scope.$emit("ChangeTitle", "cargando");

		APIClient.getMovie($routeParams.id).then(
			//postMessage(Message, transferList)cula encontrada
			function(movie){
				$scope.model = movie;
				$scope.$emit("ChangeTitle", $scope.model.titulo);
			}, 
			//Pelicula no encontrada
			function(error){
				$location.url(paths.notFound);
			}
		);
	}]
);