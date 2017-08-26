/**
 * Created by arnaud on 25/08/2017.
 */

angular.module('dummy')
    .controller('dummyController', ['$scope', '$http', function ($scope, $http) {

        $scope.test = 'If you can see this, Angular is working or not!';

        $scope.error = false;
        $scope.users = [];

        // make this call slower than normal to show loader
        $http.get('http://slowwly.robertomurray.co.uk/delay/500/url/https://jsonplaceholder.typicode.com/users')
            .then (function (response) {
                $scope.users = response.data;
            })
            .catch (function () {
                $scope.error = true;
            });


        $http.post('https://jsonplaceholder.typicode.com/users', {
                a: 1
            })
            .then (function (response) {
                // show logs in you console
            })
            .catch (function () {
                // show logs in you console
            });

        $http.get('http://httpstat.us/500')
            .then (function (response) {
                // never go here
            })
            .catch (function (error) {
                // always go here
            });
    }]);