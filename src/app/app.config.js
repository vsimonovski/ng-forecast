export default function routing($stateProvider, $locationProvider) {
    'ngInject';
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('home', {
            url: '/',
            template: require('./home/home.html'),
            controller: 'HomeController',
            controllerAs: '$ctrl'
        })
        .state('forecastSingle', {
            url: '/forecast/:q',
            template: require('./forecast/forecast.html'),
            controller: 'ForecastController',
            controllerAs: '$ctrl'
        })
        .state('forecast', {
            url: '/forecast/:q/:id',
            template: require('./forecast/forecast.html'),
            controller: 'ForecastController',
            controllerAs: '$ctrl'
        })
}