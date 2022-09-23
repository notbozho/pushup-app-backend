// ./src/services/database.service.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(`sqlite:${process.env.DB_FILE}`);


/**
 * Create connection to database.
 */
const connect = async () => {
    try {
        await sequelize.authenticate()
            .then(() => {
                console.warn('Successfully created a connection with database!')
            })
    } catch(error) {
        console.error(`Database service failed to create a connection to database!\n ${error}`);
    }
}

module.exports = {
    connect
}