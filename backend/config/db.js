import {Sequelize} from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false,
});

export async function connectDB() {
    await sequelize.authenticate();
    await sequelize.sync({ force: false }); // force: true - reset the tables each launch
}