angular.module("pelisbabel").controller("ListadoController",
	["$scope","$location","paths", "APIClient", function($scope,$location,paths, APIClient){
		// Scope init
		$scope.uiState = "loading";
		$scope.model = [];

		$scope.alquiler = function(item){
			console.log("HOLA", item.id);		
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