Menu.$inject = ['$scope'];

angular.module('app')
    .controller('Menu', Menu);

function Menu($scope) {
    var menuItems = $scope.menuItems = [];

    this.addMenuItem = function(menuItem) {
        menuItems.push(menuItem);
    };
}