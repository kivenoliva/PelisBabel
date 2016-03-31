angular.module("pelisbabel").directive("moviesList", function(){
	return {
		restrict:"AE",
		scope: {
			model:"=items",
			modo:"@",
			usuario:"=",
			getDetailUrl : "&"
		},
		templateUrl:"views/moviesList.html"
	};
});