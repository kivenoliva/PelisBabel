angular.module("pelisbabel").controller("AlquiladasController",
	["$scope","$location","paths", "APIClient","autentication", function($scope,$location,paths, APIClient,autentication){
		
		// Scope init
		$scope.uiState = "loading";
		$scope.model = [];
		$scope.usuario = autentication.getLogin()[1];
		console.log("Usuario autenticado dentro de listado",$scope.usuario );

		
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