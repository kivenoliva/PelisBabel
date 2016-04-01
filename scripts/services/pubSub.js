angular.module("pelisbabel").service('pubSub', ["$rootScope",
    function($rootScope) {

        return {
            subscribe: function(scope, callback) {
                var handler = $rootScope.$on('loginSuccess', callback);
            },

            publish: function() {
                $rootScope.$emit('loginSuccess');
            }
        };

     
    }
]);