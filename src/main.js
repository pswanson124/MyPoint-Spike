var Promise = require('bluebird').config({longStackTraces: false, warnings: false}); // Promise polyfill for IE11
import {bootstrap} from 'aurelia-bootstrapper-webpack';

//import {jquery} from
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../styles/styles.css';


import {DirtyCheckProperty} from 'aurelia-binding';
import * as LogManager from 'aurelia-logging';

const logger = LogManager.getLogger('my-app');

DirtyCheckProperty.prototype.standardSubscribe = DirtyCheckProperty.prototype.subscribe;
DirtyCheckProperty.prototype.subscribe = function(context, callable) {
  this.standardSubscribe(context, callable);

  logger.warn(`'${this.obj.constructor.name}.${this.propertyName}' is being dirty checked`, this.obj);
}

bootstrap(function(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-animator-css')
    .plugin('aurelia-computed')
    .developmentLogging();


  aurelia.start().then(() => aurelia.setRoot('app', document.body));
});
