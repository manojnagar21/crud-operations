import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../db.js';'';
const User = sequelize.define("users", {
    Id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    EmailId: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false,
    },
    Password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    Status: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
        allowNull: true,
    },
	createdAt: {
		type: 'TIMESTAMP', // Or Sequelize.DATE if configured to use TIMESTAMP
		// defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		allowNull: false,
    },
    updatedAt: {
		type: 'TIMESTAMP', // Or Sequelize.DATE if configured to use TIMESTAMP
		// defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
		allowNull: false,
    },
}, {                             
    timestamps: false, // Important: Disable default timestamps
}
);
export default User;