angular.module("pelisbabel").directive("moviesList", function(){
	return {
		restrict:"AE",
		scope: {
			model:"=items",
			modo:"@"
		},
		templateUrl:"views/moviesList.html"
	};
});