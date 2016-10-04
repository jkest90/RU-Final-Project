angular.module('NavApp')
    .factory('NavFactory', NavFact);

NavFact.$inject = ['$http'];

function NavFact($http) {

    function getAddress() {
        return $http.get('/api/address')
    }
}
