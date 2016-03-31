angular.module("pelisbabel").directive("moviesList", function(){
	return {
		restrict:"AE",
		scope: {
			model:"=items",
			usuario:"="
			
		},
		templateUrl:"views/moviesList.html"
	};
});