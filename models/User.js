import { Sequelize, DataTypes } from 'sequelize';
const User = Sequelize.define("Users", {
    Id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        alloNull: false,
    },
    EmailId: {
        
    }
});