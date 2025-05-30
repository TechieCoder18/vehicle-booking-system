const same = {
    query: { raw: false },
    timezone: "+05:30",
    dialect: "mysql",
    define: {
        freezeTableName: true,
        underscored: true,
        timestamps: false,
        charset: "utf8",
        dialectOptions: {
            collate: "utf8_general_ci",
        },
    },
    dialectOptions: {
        multipleStatements: true,
    },
};
module.exports = {
    development: {
        username: "root",
        password: "Reliable@1234",
        database: "rental-point",
        options: {
            host: "127.0.0.1",
            port: 3307,
            logging: console.log,

            ...same,
        },
    },

};
