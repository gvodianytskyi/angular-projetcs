(function () {
    'use strict'

    angular.module('app')
        .directive('menuItem', menuItem);

    function menuItem() {
        return {
            restrict: "E",
            scope: {
                name: "@"
            },
            require: ['^^menu', '?^^menuGroup'],
            transclude: true,
            link: function(scope, element, attrs, ctrl) {
                if (ctrl[1]) {
                    ctrl[1].addMenuItem(scope);
                } else {
                    ctrl[0].addMenuItem(scope);
                }
            },
            templateUrl: 'templates/menuItemTemplate.html'
        }
    }
})();
