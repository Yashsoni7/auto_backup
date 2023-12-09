import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../sequelizeConfig.js";

const Folder = sequelize.define(
    "folder",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

await Folder.sync();

export default Folder;
