import homeTemplate from './home/home.html';
import fcTemplate from './forecast/forecast.html';

export default function routing($stateProvider, $locationProvider, $urlRouterProvider) {
    'ngInject';
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: homeTemplate,
            controller: 'HomeController',
            controllerAs: '$ctrl'
        })
        .state('forecastSingle', {
            url: '/forecast/:q',
            templateUrl: fcTemplate,
            controller: 'ForecastController',
            controllerAs: '$ctrl'
        })
        .state('forecast', {
            url: '/forecast/:q/:id',
            templateUrl: fcTemplate,
            controller: 'ForecastController',
            controllerAs: '$ctrl'
        })
}