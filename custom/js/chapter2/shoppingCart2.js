/**
 * Rivers
 * 2014-11-10
 */
var shoppingModule = angular.module('shopping', []);

shoppingModule.controller('CartController', function($scope) {
    $scope.items = [{
        title : 'Paint pots', quantity : 8, price : 3.95
    }, {
        title : 'Polka dots', quantity : 17, price : 12.95
    }, {
        title : 'Pebbles', quantity : 5, price : 6.95
    }];

    $scope.bill = {};

    /**
     * remove函数只是从数组中删除元素，但是由于ngRepeat所创建的<div>都是绑定到数据上的，
     * 所以当数组中的元素消失时，列表也会自动删除对应条目
     * @param index
     */
    $scope.remove = function(index) {
        $scope.items.splice(index, 1);
    };

    $scope.totalCart = function() {
        var total = 0;
        for (var i = 0, len = $scope.items.length; i < len; i++) {
            total = total + $scope.items[i].price * $scope.items[i].quantity;
        }
        return total;
    };

    $scope.subtotal = function() {
        return $scope.totalCart() - $scope.bill.discount;
    };

    function calculateDiscount(newValue, oldValue, scope) {
        $scope.bill.discount = newValue > 100 ? 10 : 0;
    };

    $scope.$watch($scope.totalCart, calculateDiscount);
});
