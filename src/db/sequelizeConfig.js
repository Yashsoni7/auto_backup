import { Sequelize } from "sequelize";
import * as config from "../config.js";

const sequelize = new Sequelize(
    config.db_name,
    config.db_username,
    config.db_pass,
    {
        host: config.db_host,
        dialect: "postgres",
        schema: "dbo",
    }
);

await sequelize
    .authenticate()
    .then(() => console.log("DB Connection Successful"))
    .catch((e) => console.log(e));

export default sequelize;
