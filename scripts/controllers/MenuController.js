//En el módulo moviedb, defino el controlador.
angular.module("pelisbabel").controller("MenuController",
	["$scope","$location","paths", "autentication","pubSub",
	function($scope,$location,paths,autentication,pubSub){
		//Scope init
		$scope.model = {
			selectedItem: paths.listado
		};
		$scope.paths = paths;
		$scope.view = "login";

		//Scope methods
		$scope.getClassForItem = function(item){
			if($scope.model.selectedItem == item){
				return "active";
			}else{
				return "";
			}
		}
		$scope.logout = function(){

			autentication.logout();
			console.log("He hecho logout");
			pubSub.publishLogout()
			$location.url(paths.login);			
		};
		//Scope event listeners
		$scope.$on("$locationChangeSuccess", function(event,currentRoute){	
			$scope.model.selectedItem = $location.path();	
		});
		pubSub.subscribe($scope, function() {
			$scope.view = "";
			console.log("Me ha llegado subscripcion",$scope.view);
		});
		pubSub.subscribeLogout($scope, function() {
			$scope.view = "login";
			console.log("Me ha llegado subscripcion",$scope.view);
		});
	}]
);