angular.module("pelisbabel").filter("future",
	[function(){
		return function(text){
			return moment.duration().days();
		};
	}]
); 