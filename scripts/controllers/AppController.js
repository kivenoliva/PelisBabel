angular.module("pelisbabel").controller("AppController",
	["$scope","$location","paths", function($scope,$location,paths){
		var controller = this;
		//Controller properties
		controller.titles = {};
		controller.titles[paths.home] = "Películas Babel";
		controller.titles[paths.listado] = "Listado Películas";
		controller.titles[paths.alquiladas] = "Mis películas alquiladas";

		//Model init
		$scope.model = {
			title: ""
		}

		//Scope EventListeners
		$scope.$on("$locationChangeSuccess", function(event,currentRoute){
			$scope.model.title = controller.titles[$location.path()] || "404 Not Found";
		});

		$scope.$on("ChangeTitle", function(event,title){
			$scope.model.title = title;
		});


	}]
);