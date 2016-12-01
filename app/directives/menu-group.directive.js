(function () {
    'use strict'

    angular.module('app')
        .directive('menuGroup', menuGroup);

    function menuGroup() {
        return {
            restrict: "E",
            scope: {
                name: '@'
            },
            require: '^^menu',
            controller: 'MenuGroup',
            transclude: true,
            templateUrl: 'templates/menuGroupTemplate.html'
        }
    }
})();
