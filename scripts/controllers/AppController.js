angular.module("pelisbabel").controller("AppController",
	["$scope","$location","paths", "autentication", "pubSub", function($scope,$location,paths, autentication, pubSub){
		var controller = this;
		//Controller properties
		controller.titles = {};
		controller.titles[paths.home] = "Películas Babel";
		controller.titles[paths.listado] = "Listado Peliculas";
		controller.titles[paths.alquiladas] = "Mis peliculas alquiladas";
		controller.titles[paths.login] = "Login";
		controller.titles[paths.nuevaPelicula] = "Pelicula nueva";
		controller.titles[paths.peliculaDetalle] = "Detalle de la pelicula";

		//Model init
		$scope.model = {
			title: ""
		};
		$scope.user = "";

		//Scope EventListeners
		$scope.$on("$locationChangeSuccess", function(event,currentRoute){
			$scope.model.title = controller.titles[$location.path()] || "404 Not Found";
			if(!autentication.getLogin()[0]){
				console.log("No estas logeado");
				$scope.$emit("alLogin");
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