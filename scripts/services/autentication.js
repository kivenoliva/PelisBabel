angular.module("pelisbabel").service("autentication", ["$log", function($log){
	
	var userLogin = [false, ""];

	this.setLogin = function(user,bool){
		
		userLogin[0] = bool;
		userLogin[1] = user;

	};

	this.getLogin = function(){
		return userLogin;

	};

	
}]);