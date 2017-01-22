import angular from 'angular';

import './home.scss';

import HomeController from './home.controller';
export default angular.module('wFct.home', [])
    .controller('HomeController', [HomeController])
    .name;