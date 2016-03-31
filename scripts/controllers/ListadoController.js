angular.module("pelisbabel").controller("ListadoController",
	["$scope","$location","paths", "APIClient","autentication", function($scope,$location,paths, APIClient,autentication){
		// Scope init
		$scope.uiState = "loading";
		$scope.model = [];
		$scope.usuario = autentication.getLogin()[1];
		
		$scope.alquiler = function(item){
			console.log("HOLA", item.id);		
			APIClient.getMovie(item.id).then(
				//postMessage(Message, transferList)cula encontrada
				function(movie){
					var peliAlquilada = movie;
					console.log("ANtes de cambiar", peliAlquilada);
					peliAlquilada.alquilada = "Alquilada";
					peliAlquilada.usuario_alquilado = $scope.usuario;

					APIClient.modificarMovie(item.id, peliAlquilada).then(
						//postMessage
						function(movie){
							//hacer algo cuando ya me han alquilado esa peli
							console.log("alquilada");
							$scope.$emit("cambioAlquiler", movie);
						}, 
						//Pelicula no encontrada
						function(error){
							$location.url(paths.notFound);
						}
					);
				}, 
				//Pelicula no encontrada
				function(error){
					$location.url(paths.notFound);
				}
			);
		};


		$scope.$on("cambioAlquiler", function(event,movie){

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

		});


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