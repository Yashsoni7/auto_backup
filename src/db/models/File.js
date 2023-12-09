import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../sequelizeConfig.js";

const File = sequelize.define(
    "file", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    created_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    folder_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

await File.sync();

export default File;