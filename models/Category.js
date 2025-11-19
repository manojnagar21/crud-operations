import { Sequelize, DataTypes } from 'sequelize';
import '../server.js';
const Category = Sequelize.define("Category", {
    Id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    Name: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false,
    },
    Status: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
        allowNull: true,
    }
});
export default { Category };