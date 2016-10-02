var MarvelApp = angular.module('MarvelApp');

MarvelApp.service('MarvelApiService' , function($http) {
    return {
        // Get Marvel API data
        getMarvelData: function(comicId) {
            var url = '';

            if(comicId) {
                url = 'http://gateway.marvel.com/v1/public/comics/' + comicId;

            } else {
                url = 'http://gateway.marvel.com/v1/public/comics';
            }

            // Service to Get data from the API
            return $http({
                url: url,
                method: 'GET',
                params: {
                    apikey: '3a5ee8397d82dd1d8b96300b674e5971',
                    limit: 42
                }
            });
        }
    }
});