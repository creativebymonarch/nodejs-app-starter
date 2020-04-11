/**
 * Module dependencies.
 */
const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const hbs = require('hbs');
/**
 * Structures const
 */
const DEV_MODE = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
global.__basedir = __dirname;
/**
 * Router
 */
const router = require('./router').router;

/****************************/

/**
 * Declare express
 */
const app = express();

/**
 * DB Connection
 * Uncomment to use connector
 */
//db.mongooseConnection();
//db.mongoConnection();

/**
 * Views engine setup
 * Handlebars Template Rendering
 */
app.set('views', path.join('./views'));
app.set('view engine', 'hbs');
hbs.registerPartials('./views/partials');
hbs.localsAsTemplateData(app);
app.locals.production = !DEV_MODE;

/**
 * Express setup
 */
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join('./public')));

/**
 * Logs only on development
 */
if (DEV_MODE) {
    const logger = require('morgan');
    app.use(logger('dev'));
}

/**
 * Set router
 */
app.use('/', router);

/**
 * Catch 404 and forward to error handler
 */
app.use(function (req, res) {
    res.status(404).render("errors/404");
});

/**
 * Error handler
 */
app.use(function (err, req, res) {
    if (DEV_MODE) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        return res.render('errors/dev');
    } else {
        return res.status(500).render("errors/500");
    }
});

module.exports = app;