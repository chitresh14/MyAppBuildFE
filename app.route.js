'use strict'

export default function appConfig($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('*');
        $routeProvider.
        when('/signin', {
            template: '<main-app-component></main-app-component>'
        }).
        otherwise('/signin');
}

appConfig.$inject = ['$routeProvider', '$locationProvider'];