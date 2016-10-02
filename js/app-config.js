/**
 * Created by Alexander Sugianto on 2016-10-01.
 */

var MarvelApp = angular.module('MarvelApp');

MarvelApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/Detail/:comicId', {
            templateUrl: 'templates/marvel-detail-view.html',
            controller: 'MarvelApiDetailController'
        }).
        when('/', {
            templateUrl: 'templates/marvel-list-view.html',
            controller: 'MarvelApiController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);