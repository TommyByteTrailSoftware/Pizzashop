angular.module('ShopSite', [])
.controller('NamesCtrl', function($scope, $http){
  $http.get('names.json').then(function (namesResponse) {
        $scope.names = namesResponse.data;
    }, function () {
    console.error('couldnt load');
    });
});