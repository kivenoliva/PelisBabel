angular.module("pelisbabel").directive("moviesList", function(){
	return {
		restrict:"AE",
		scope: {
			model:"=items",
			modo:"@",
			usuario:"=",
			getDetailUrl : "&",
			alquiler:"&",
			desalquiler: "&"
		},
		templateUrl:"views/moviesList.html"
	};
});