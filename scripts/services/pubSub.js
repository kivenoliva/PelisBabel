angular.module("pelisbabel").service('pubSub', ["$rootScope",
    function($rootScope) {

        return {
            subscribe: function(scope, callback) {
                var handler = $rootScope.$on('loginSuccess', callback);
            },

            publish: function() {
                console.log("MAndo un publish");
                $rootScope.$emit('loginSuccess');
            },
            subscribeLogout: function(scope, callback) {
                var handler = $rootScope.$on('loginSuccessLogout', callback);
            },

            publishLogout: function() {
                $rootScope.$emit('loginSuccessLogout');
            }
        };

     
    }
]);