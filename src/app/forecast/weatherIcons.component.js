import wiTemplate from './forecastComponent.html';

let ForecastComponent = {
    templateUrl: wiTemplate,
    controller: 'ForecastController',
    bindings: {
        w: '='
    },
};

export default ForecastComponent;