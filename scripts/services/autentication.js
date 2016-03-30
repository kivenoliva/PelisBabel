angular.module("pelisbabel").service("autentication", ["$log", function($log){
	
	var userLogin = [false, ""];

	this.setLogin = function(user){
		
		userLogin[0] = true;
		userLogin[1] = user;
		return userLogin;

	};

	this.setLogin = function(user){
		
		return userLogin;

	};

	
}]);