(function () {
    'use strict';
    angular.module('MenuApp')
    .component('itemsList', {
        templateUrl: 'src/items.template.html',
        bindings: {
            menuItems: '<',
        }
    });
})();