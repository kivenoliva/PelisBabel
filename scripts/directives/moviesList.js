angular.module("pelisbabel").directive("moviesList", function(){
	return {
		restrict:"AE",
		scope: {
			model:"=items",
			modo:"@",
			usuario:"="
		},
		templateUrl:"views/moviesList.html"
	};
});