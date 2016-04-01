angular.module("pelisbabel").controller("DetallePeliculaController",
	["$scope","$sce","$routeParams","$location","APIClient","paths",
	function($scope, $sce,$routeParams,$location,APIClient,paths){
		$scope.model = {};
		$scope.videoPlay = false;

		//Scope methods
		$scope.trustSrc = function() {
	    	return $sce.trustAsResourceUrl($scope.model.url);
		}

        $scope.desalquiler = function(){
        	$scope.videoPlay = true;
			console.log("SCOPE DETALLE", $scope.model);
			
			$scope.model.alquilada = "No alquilada";
			$scope.model.usuario_alquilado = "";
			
			APIClient.modificarMovie($scope.model.id, $scope.model).then(
				//postMessage
				function(movie){
					//hacer algo cuando ya me han alquilado esa peli
					$scope.model = {};
				}, 
				//Pelicula no encontrada
				function(error){
					$location.url(paths.notFound);
				}
			);
			
		};


		$scope.$emit("ChangeTitle", "cargando");


		//Scope start
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