//En el módulo moviedb, defino el controlador.
angular.module("pelisbabel").controller("MenuController",
	["$scope","$location","paths", "autentication",function($scope,$location,paths,autentication){
		//Scope init
		$scope.model = {
			selectedItem: paths.listado
		};
		$scope.paths = paths;

		//Scope methods
		$scope.getClassForItem = function(item){
			if($scope.model.selectedItem == item){
				return "active";
			}else{
				return "";
			}
		}
		$scope.logout = function(){

			autentication.setLogin("",false);
			console.log("He hecho logout");
			$location.url(paths.login);			
		};
		//Scope event listeners
		$scope.$on("$locationChangeSuccess", function(event,currentRoute){	
			$scope.model.selectedItem = $location.path();	
		});
	}]
);