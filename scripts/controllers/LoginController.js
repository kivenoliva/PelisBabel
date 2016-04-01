angular.module("pelisbabel").controller("LoginController",
	["$scope","$location","paths", "autentication","pubSub",
	function($scope,$location,paths, autentication,pubSub){
		
		// Scope init
		$scope.uiState = "loading";
		$scope.model = {};
		$scope.user = [];

		// Scope init
		$scope.login = function(){
			autentication.setLogin($scope.model.name,true);
            console.log("Acabo de loguearme con el usuario : ", $scope.model.name);
            pubSub.publish();
			$location.url(paths.listado);			
		};
	}]
);