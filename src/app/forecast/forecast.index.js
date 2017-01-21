import angular from 'angular';
import './forecast.scss';
import 'weather-icons/css/weather-icons.min.css';

import ForecastController from './forecast.controller';
import HomeService from '../app.service';

export default angular.module('wFct.forecast', [])
    .controller('ForecastController', ['$stateParams', 'cityService', '$scope', ForecastController])
    .service('cityService', HomeService)
    .name;