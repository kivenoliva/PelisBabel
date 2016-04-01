angular.module("pelisbabel").controller("NuevaPeliculaController",
	["$scope","$location","APIClient","paths","autentication", function($scope,$location, APIClient,paths,autentication){
		//Scope init
		$scope.model = {};
		$scope.successMessage = null;
		$scope.errorMessage = null;

		//Scope methods
		$scope.guardarPelicula = function(){
			$scope.model.alquilada = "No alquilada";
			$scope.model.fecha_creacion = new Date().toLocaleDateString();
			$scope.model.fecha_alquiler = "";
			$scope.model.usuario_alquilado = "";
			$scope.model.propietario = autentication.getLogin()[1];
			APIClient.createMovie($scope.model).then(
				function(movie){
/*					$scope.successMessage = "Movie saved! <a href=\"#/movies/"+ movie.id + "\">View new Movie Detail</a>"
*/					$scope.model = {};
					$location.url(paths.listado);	
				},
				function(error){
/*					$scope.errorMessage = "Fatal error. The end is near.";
*/				
					console.log("ME ha dado error al hacer el guardarPElicula");
				}
			);
		};
	}]
);
