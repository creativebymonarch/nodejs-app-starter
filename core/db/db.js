const mongoose = require('mongoose');
const MongoClient = require("mongodb").MongoClient;
const DB = global.CURRENT_CONFIG.db;

module.exports = {

    mongooseConnection: function () {
        // API Connection
        mongoose.connect(DB, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
        var db  = mongoose.connection;
        //Database global connection
        db.on('error', console.error.bind(console, 'Error during DB connection'));
        db.once('open', function () {
            console.log("...DB connected...");
        });
    },
    mongoConnection: function () {
        MongoClient.connect(DB_URL, {useCreateIndex: true, useNewUrlParser: true}, (error, client) => {
            if (error) {
                console.error.bind(console, 'Error during DB connection');
            }
            return client.db("...DB connected...");
        });
    },

};