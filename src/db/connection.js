// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize(process.env.MYSQL_URI, {
//     dialect: "mysql",
// });

// sequelize.authenticate()
//     .then(() => {
//         console.log('Connected to MySQL database successfully!');
//     })
//     .catch((error) => {
//         console.error('Unable to connect to the database:', error);
//     });

// module.exports = sequelize;
// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize(process.env.MYSQL_URI);

// sequelize.authenticate();

// console.log("db connection is working");

// module.exports = sequelize;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.MYSQL_URI, {
    dialect: 'mysql', // Change this to your database dialect
});

sequelize.authenticate()
    .then(() => {
        console.log('Connected to MySQL database successfully!');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

module.exports = sequelize;
