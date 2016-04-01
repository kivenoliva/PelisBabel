angular.module("pelisbabel").controller("ListadoController",
	["$scope","$location","paths", "APIClient","autentication", function($scope,$location,paths, APIClient,autentication){
		// Scope init
		$scope.uiState = "loading";
		$scope.model = [];
		$scope.usuario = autentication.getLogin()[1];
		
		$scope.alquiler = function(item, pos){
			console.log("item", item.id);
			console.log("pos", pos);
			var movie = $scope.model[pos];
			movie.alquilada = "Alquilada";
			movie.usuario_alquilado = $scope.usuario;
			APIClient.modificarMovie(item.id, movie).then(
				//postMessage
				function(movie){
					//hacer algo cuando ya me han alquilado esa peli
					
					console.log("alquilada");
				}, 
				//Pelicula no encontrada
				function(error){
					$location.url(paths.notFound);
				}
			);
		};

		// Controller start
		APIClient.getMovies().then(

			//primero siempre el succes
			function(data){
				$scope.model = data;

				if(data.length == 0){
					$scope.uiState = "blank";
				}else{
					$scope.uiState = "ideal";
				}
			},

			

			//segundo si ha habido error
			function(data){
				$log.error("Error", data);
				$scope.uiState = "error";
			}
		);
    }]
);