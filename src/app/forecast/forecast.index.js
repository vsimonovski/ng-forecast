import angular from 'angular';
import './forecast.scss';
import 'weather-icons/css/weather-icons.min.css';

import ForecastController from './forecast.controller';
import ForecastComponent from './weatherIcons.component';
import TemperatureComponent from './temperature.component';
import AppService from '../app.service';

export default angular.module('wFct.forecast', [])
    .controller('ForecastController', ['$stateParams', 'appService', '$scope', ForecastController])
    .component('weatherIcons', ForecastComponent)
    .component('temperature', TemperatureComponent)
    .service('appService', AppService)
    .name;