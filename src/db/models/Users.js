import { Sequelize, DataTypes } from "sequelize";
import bcrypt from "bcrypt";

import sequelize from "../sequelizeConfig.js";

const Users = sequelize.define(
    "users",
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        firstname: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        password_hash: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

Users.beforeCreate(async (user) => {
    const saltRounds = 1; // Number of salt rounds for bcrypt
    const hashedPassword = await bcrypt.hash(user.password_hash, saltRounds);
    user.password_hash = hashedPassword;
});

// Function to compare passwords during login
Users.prototype.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password_hash);
};

await Users.sync();

export default Users;
