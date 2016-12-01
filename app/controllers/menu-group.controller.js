Menu.$inject = ['$scope'];

angular.module('app')
    .controller('MenuGroup', MenuGroup);

function MenuGroup($scope) {
    var menuItems = $scope.menuItems = [];

    this.addMenuItem = function(menuItem) {
        menuItems.push(menuItem);
    };
}