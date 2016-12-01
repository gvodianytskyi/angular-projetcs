(function () {
    'use strict'

    angular.module('app')
        .directive('menu', menu);

    function menu() {
        return {
            restrict: "E",
            scope: {},
            controller: 'Menu',
            transclude: true,
            templateUrl: 'templates/menuTemplate.html'
        }
    }
})();
