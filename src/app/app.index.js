import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import 'bootstrap-material-design/dist/css/ripples.min.css';
import 'bootstrap-material-design/dist/js/material.min.js';
import 'bootstrap-material-design/dist/js/ripples.min.js';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import home from './home/home.index';
import forecast from './forecast/forecast.index';

import routing from './app.config';

angular.module('wFct', [
        uirouter,
        ngResource,
        home,
        forecast
    ])
    .config(routing);