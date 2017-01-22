import tempTemplate from './temperature.html';

let temperatureComponent = {
    templateUrl: tempTemplate,
    controller: 'ForecastController',
    bindings: {
        w: '='
    },
};

export default temperatureComponent;