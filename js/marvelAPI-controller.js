angular.module('MarvelApiController', []).
controller('MarvelApiController', ['$scope', 'MarvelApiService', function($scope, MarvelApiService) {

    $scope.marvelData = {};
    $scope.comics = {};
    $scope.attributes = {};

    $scope.getMarvelApiData = function() {
        MarvelApiService.getMarvelData().then(function(results) {
            $scope.comics = results.data.data.results;
        });
    };

}]).
controller('MarvelApiDetailController', ['$scope', 'MarvelApiService', '$routeParams', function($scope, MarvelApiService, $routeParams) {
    $scope.comic_id = $routeParams.comicId;
    $scope.comicDetail = {};

    $scope.detailComic = function() {
        MarvelApiService.getMarvelData($scope.comic_id).then(function(results) {
            $scope.comicDetail = results.data.data.results[0];
        });
    }
}]);
