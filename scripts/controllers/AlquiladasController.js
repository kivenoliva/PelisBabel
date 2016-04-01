angular.module("pelisbabel").controller("AlquiladasController",
	["$scope","$location","paths", "APIClient","autentication","URL", 
	function($scope,$location,paths, APIClient,autentication,URL){
		
		// Scope init
		$scope.uiState = "loading";
		$scope.model = [];
		$scope.usuario = autentication.getLogin()[1];

		$scope.getMovieDetailURL = function(movie){
            return URL.resolve(paths.peliculaDetalle, {id: movie.id});
        }
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