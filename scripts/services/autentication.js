angular.module("pelisbabel").service("autentication", ["$log", function($log){
	
	var userLogin = [false, ""];

	this.setLogin = function(user,bool){
		
		userLogin[0] = bool;
		userLogin[1] = user;
		localStorage.setItem("usuarioLogueado", user);

	};

	this.getLogin = function(){
		var user = localStorage.getItem("usuarioLogueado");
		if( user == ""){
			userLogin[0] = false;
			userLogin[1] = "";
		}else{
			userLogin[0] = true;
			userLogin[1] = user;
		}
		return userLogin;
	};



	
}]);