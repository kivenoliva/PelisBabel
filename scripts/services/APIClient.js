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
        
        this.createMovie = function(movie){
            //Crear el objeto diferido
            var deferred = $q.defer();
            //Hacer trabajo asíncrono
            $http.post(api_paths.movies,movie).then(
                function(response){
                        //resolver la promesa
                        deferred.resolve(response.data);
                },
                function(response){
                        //rechazar la promesa
                        deferred.reject(response.data);
                }
            );
            //devolver la promesa
            return deferred.promise; 
        };
        this.modificarMovie = function(movie){
            //Crear el objeto diferido
            var deferred = $q.defer();
            //Hacer trabajo asíncrono
            $http.put(api_paths.movies,movie).then(
                function(response){
                        //resolver la promesa
                        deferred.resolve(response.data);
                },
                function(response){
                        //rechazar la promesa
                        deferred.reject(response.data);
                }
            );
            //devolver la promesa
            return deferred.promise; 


        }
    }]
);