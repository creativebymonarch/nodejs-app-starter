/**
 * Module dependencies.
 * Here call some dependencies that you need in your controller
 */


module.exports = {
    home: function (req, res) {

        return res.status(200).render('index',
            {
                title: ".creative | NodeJS APP Starter / Welcome"
            });

    },
    documentation: function (req, res) {

        return res.status(200).render('documentation',
            {
                title: ".creative | NodeJS APP Starter / Documentation"
            });

    }
};