/**
 * Module dependencies.
 */
const express = require('express');

/**
 * Controllers
 */
const Examples = require('./controllers/examples.controller');

//Router
exports.router = (function () {
    var Router = express.Router();

    //Dashboard
    Router.route('/').get(Examples.home);
    Router.route('/documentation').get(Examples.documentation);

    return Router;
})();