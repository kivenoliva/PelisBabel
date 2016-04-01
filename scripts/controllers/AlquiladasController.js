angular.module("pelisbabel").controller("AlquiladasController",
	["$scope","$location","paths", "APIClient","autentication","URL", 
	function($scope,$location,paths, APIClient,autentication,URL){
		
		// Scope init
		$scope.uiState = "loading";
		$scope.model = [];
		$scope.usuario = autentication.getLogin()[1];


		// Scope métodos
		$scope.getMovieDetailURL = function(movie){
            return URL.resolve(paths.peliculaDetalle, {id: movie.id});
        }

        
        $scope.desalquiler = function(item, pos){
        	console.log("SCOPE ALQUILADA", $scope.model);
			console.log("item", item.id);
			console.log("pos", pos);
			
			var movie = $scope.model[pos];
			movie.alquilada = "No alquilada";
			movie.usuario_alquilado = "";

			
			APIClient.modificarMovie(item.id, movie).then(
				//postMessage
				function(movie){
					//hacer algo cuando ya me han alquilado esa peli
					$scope.model.splice(pos, 1);
					if($scope.model.length == 0){
						$scope.uiState = "blank";
					}else{
						$scope.uiState = "ideal";
					}
				}, 
				//Pelicula no encontrada
				function(error){
					$location.url(paths.notFound);
				}
			);
			
		};
	

		function filtrarAlquiladas(data){

			var arrayRes = [];
			for(var i = 0; i < data.length; i++){
				
				if(data[i].alquilada == "Alquilada" && data[i].usuario_alquilado == $scope.usuario){
					arrayRes.push(data[i]);
				}
			};
			console.log("filtro", arrayRes);
			return arrayRes;
		}


		// Controller start
		APIClient.getMovies().then(

			//primero siempre el succes
			function(data){

				$scope.model = filtrarAlquiladas(data);
				if($scope.model.length == 0){
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