import angular from 'angular';

import './home.scss';

import HomeController from './home.controller';
import HomeService from '../app.service';
export default angular.module('wFct.home', [])
    .controller('HomeController', ['cityService', '$scope', HomeController])
    .service('cityService', HomeService)
    .name;