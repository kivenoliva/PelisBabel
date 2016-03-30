angular.module("pelisbabel").service("APIClient", 
	["$http", "$q", "api_paths", function($http, $q, api_paths){

		this.apiRequest = function(url){

			var deferred = $q.defer();
			$http.get(url).then(

				function(response){
					deferred.resolve(response.data);
				},

				function(response){
					deferred.reject(response.data);
				}

			);

			return deferred.promise;
		}


		this.getMovies = function(){
			return this.apiRequest(api_paths.movies);
			
		};

		

	}]
);