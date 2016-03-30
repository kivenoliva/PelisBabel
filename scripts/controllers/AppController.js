angular.module("pelisbabel").controller("AppController",
	["$scope","$location","paths", "autentication", function($scope,$location,paths, autentication){
		var controller = this;
		//Controller properties
		controller.titles = {};
		controller.titles[paths.home] = "Películas Babel";
		controller.titles[paths.listado] = "Listado Películas";
		controller.titles[paths.alquiladas] = "Mis películas alquiladas";
		controller.titles[paths.login] = "Login";

		//Model init
		$scope.model = {
			title: ""
		};

		//Scope EventListeners
		$scope.$on("$locationChangeSuccess", function(event,currentRoute){
			$scope.model.title = controller.titles[$location.path()] || "404 Not Found";
			if(!autentication.getLogin()[0]){
				console.log("No estas logeado");
				$location.url(paths.login);
			}else{
				console.log("Estas logueado con usuario : ",autentication.getLogin()[1] );
			}
		});

		$scope.$on("ChangeTitle", function(event,title){
			$scope.model.title = title;
		});


	}]
);