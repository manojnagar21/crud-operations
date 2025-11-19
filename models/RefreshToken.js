import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import User from "../models/User.js";

const RefreshToken = sequelize.define("refresh_token", {
    token: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    expiresAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    device: DataTypes.STRING,
    ip: DataTypes.STRING,
    // createdAt: {
    //     type: 'TIMESTAMP', // Or Sequelize.DATE if configured to use TIMESTAMP
    //     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    //     allowNull: false,
    // },
    // updatedAt: {
    //     type: 'TIMESTAMP', // Or Sequelize.DATE if configured to use TIMESTAMP
    //     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    //     allowNull: false,
    // },
}, {                             
    timestamps: false, // Important: Disable default timestamps
});

User.hasMany(RefreshToken, { onDelete: "CASCADE" });
RefreshToken.belongsTo(User);



export default RefreshToken;