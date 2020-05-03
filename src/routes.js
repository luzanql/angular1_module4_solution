
(function () {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');
        $stateProvider
        // Home page
        .state('home', {
            url: '/',
            templateUrl: 'src/templates/home.template.html'
        })
        // Premade list page
        .state('categoryList', {
            url: '/category-list',
            templateUrl: 'src/templates/categoryList.template.html',
            controller: 'CategoryListController as categoryList',
            resolve: {
                categories: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        // Item detail
        .state('categoryList.itemList', {
            templateUrl: 'src/templates/item-list.template.html',
            controller: 'ItemListController as itemList',
            params: {
                category: null
            },
            resolve: {
                menuItems: ['MenuDataService', '$stateParams',
                        function (MenuDataService, $stateParams) {
                            return MenuDataService.getItemsForCategory($stateParams.category);
                        }]
            }
        });
    }
})();