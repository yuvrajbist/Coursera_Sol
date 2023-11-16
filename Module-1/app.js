(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.di = '';
        $scope.text = '';
        $scope.ch = false;

        $scope.checkLunch = function() {
            if ($scope.di.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.ch = true;
                $scope.empty = false;
                var arrdi = $scope.di.split(',');
                var arrWiEm = arrdi.filter(function(v) {
                    return v.trim() !== '';
                });

                if (arrWiEm.length <= 3) {
                    $scope.text = 'Enjoy!';
                } else {
                    $scope.text = 'Too much!';
                }
            }
        };
    }
})();
