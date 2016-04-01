	//Defino el módulo "pelisbabel"
angular.module("pelisbabel",['ngRoute',"URL","ngSanitize"]).config(
	["$routeProvider","paths", function($routeProvider,paths){
		//Configuro las URLS de la app
		$routeProvider
			.when(paths.home, {
				redirectTo: paths.listado
			}).when(paths.login, {
				templateUrl: 'views/login.html'
			}).when(paths.listado, {
				templateUrl: 'views/listado.html'
			}).when(paths.alquiladas, {
				templateUrl: 'views/alquiladas.html'	
			}).when(paths.nuevaPelicula, {
				templateUrl: 'views/nuevapelicula.html'	
			}).when(paths.peliculaDetalle, {
				templateUrl: 'views/detallepelicula.html'	
			}).otherwise({
				templateUrl: 'views/404.html'
			})
	}]
);
