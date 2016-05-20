import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';

import routing from './config';
import home from './features/home'

const ngModule = angular.module('app', [home])
                        .config(routing);
   


