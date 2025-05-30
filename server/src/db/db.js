const { Sequelize } = require("sequelize");
const env = process.env.NODE_ENV;
const config = require("./config.js")[env];

sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config.options
);

const db = {};

//sync   developemt only-

sequelize.sync({
    force: false,
    alter: {
        drop: false,
    },
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
