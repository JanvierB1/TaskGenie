'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {




        await queryInterface.createTable('users', { 
            id:{
            type:Sequelize.INTEGER(50),
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false,
            unique:true,
        },
        email:{
            type:Sequelize.STRING,
            allowNull:false,
            unique:true,
        },
        phone:{
            type:Sequelize.STRING,
            allowNull:false,
            unique:true,
        },
        createdAt:Sequelize.DATE,
        updatedAt:Sequelize.DATE
     })

    },

    down: async (queryInterface, Sequelize) => {

        await queryInterface.dropTable('users');
    }
};