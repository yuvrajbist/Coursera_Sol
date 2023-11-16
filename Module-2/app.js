(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('toBuy', toBuy)
        .controller('alreadyBou', alreadyBou)
        .service('shoppingList', shoppingList);

    toBuy.$inject = ['shoppingList'];

    function toBuy(shoppingList) {
        var toBuyList = this;

        toBuyList.items = shoppingList.getToBuyItems();

        toBuyList.buyItem = function(itemIndex) {
            shoppingList.buyItem(itemIndex);
        };
    }

    alreadyBou.$inject = ['shoppingList'];

    function alreadyBou(shoppingList) {
        var alreadyBougthList = this;

        alreadyBougthList.items = shoppingList.getAlreadyBoughtItems();
    }

    function shoppingList() {
        var service = this;
        var toBuyItems = [
            { name: "cookies", quantity: 10 },
            { name: "cokes", quantity: 2 },
            { name: "beers", quantity: 6 },
            { name: "apples", quantity: 4 },
            { name: "bananas", quantity: 7 }
        ];
        var alreadyBoughtItems = [];

        service.buyItem = function(itemIndex) {
            var item = toBuyItems[itemIndex];

            alreadyBoughtItems.push(item);
            toBuyItems.splice(itemIndex, 1);
        };

        service.getToBuyItems = function() {
            return toBuyItems;
        };

        service.getAlreadyBoughtItems = function() {
            return alreadyBoughtItems;
        };
    }
})();
