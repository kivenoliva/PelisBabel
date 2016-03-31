angular.module("pelisbabel").directive("moviesList", function(){
	return {
		restrict:"AE",
		scope: {
			model:"=items",
			modo:"@",
			usuario:"=",
			alquiler:"&"
		},
		templateUrl:"views/moviesList.html"
	};
});