angular.module("pelisbabel").directive("moviesList", function(){
	return {
		restrict:"AE",
		scope: {
			model:"=items",
<<<<<<< HEAD
			modo:"@"
=======
			usuario:"="
			
>>>>>>> b25842097d53f1f128775d8b5887019fe769a479
		},
		templateUrl:"views/moviesList.html"
	};
});