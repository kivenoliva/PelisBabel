//En el módulo moviedb, defino el controlador.
angular.module("pelisbabel").controller("MenuController",
	["$scope","$location","paths",function($scope,$location,paths){
		//Scope init

		$scope.model = {
			selectedItem: paths.home
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

		//Scope event listeners
		$scope.$on("$locationChangeSuccess", function(event,currentRoute){
			$scope.model.selectedItem = $location.path();
		});
	}]
);