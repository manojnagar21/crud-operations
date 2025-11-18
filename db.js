import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
dotenv.config();
const sequelize = new Sequelize('crud', 'root', '', {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT
});
async function connectToDatabase() {
    try {
        await sequelize.authenticate();
        console.log("Database connecte successfully");
    } catch(error) {
        console.log("Error caonnecting databases " + error);
    }
}
export { connectToDatabase };