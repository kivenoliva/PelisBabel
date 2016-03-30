angular.module("pelisbabel").controller("LoginController",
	["$scope","$location","paths", "autentication", function($scope,$location,paths, autentication){
		
		// Scope init
		$scope.uiState = "loading";
		$scope.model = {};
		$scope.user = [];

		// Scope init
		$scope.login = function(){
			autentication.setLogin($scope.model.name);
			$location.url(paths.listado);			
		};

/*
		console.log($scope.uiState);
		// Controller init
		$scope.user = autentication.getLogin();
		$scope.uiState = 'ideal';
		console.log($scope.uiState);
		console.log($scope.user);
		autentication.setLogin();
		$scope.user = autentication.getLogin();
		console.log("HOLA", $scope.user);

*/

	}]
);