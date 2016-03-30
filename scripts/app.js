//Defino el módulo "moviedb"
angular.module("pelisbabel",['ngRoute',"ngSanitize"]).config(
	["$routeProvider","paths", function($routeProvider,paths){
		//Configuro las URLS de la app
		$routeProvider
			.when(paths.home, {
				redirectTo: 'views/login.html'
			}).otherwise({
				templateUrl: 'views/404.html'
			})
	}]
);