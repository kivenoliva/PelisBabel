angular.module("pelisbabel").directive("moviesList", function(){
	return {

		restrict:"AE",
		scope: {
			model:"=items",
			
		},
		templateUrl:"views/moviesList.html"
	};
});