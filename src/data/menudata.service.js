(function () {

    angular.module('MenuApp')
    .service('MenuDataService', MenuDataService)
    .constant('BaseURl', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http', 'BaseURl']
    function MenuDataService($http, BaseURl) {
        var service = this;

        service.getAllCategories = function(){
            var promise = $http({
                method: "GET",
                url: (BaseURl + "/categories.json")
            }).then(function(response){
                var data = response.data;
                return data;
            });

            return promise;
        }
        service.getItemsForCategory = function(categoryShortName){
            var promise = $http({
                method: "GET",
                url: (BaseURl + "/menu_items.json"),
                params: {
                    category: categoryShortName
                }
            }).then(function(response){
                var data = response.data;
                return data;
            });
            return promise;
        }
    }
})();
