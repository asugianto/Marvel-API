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
                    apikey: '<YOUR_API_KEY>',
                    limit: 42
                }
            });
        }
    }
});