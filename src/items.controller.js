(function () {
    'use strict';

    angular.module('MenuApp')
    .controller('ItemListController', ItemListController);

    ItemListController.$inject = ['MenuDataService', '$stateParams','menuItems'];
    function ItemListController(MenuDataService, $stateParams, menuItems) {
        var itemList = this;
        itemList.menuItems = menuItems.menu_items;
    }

})();