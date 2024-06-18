const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const VendorUsers = sequelize.define('VendorUsers',{
    VendorOrgId: {type:DataTypes.INTEGER},
    UserName: {type:DataTypes.STRING},
    Name: {type:DataTypes.STRING},
    Role: {type:DataTypes.STRING},
 }, {timestamps: false })
module.exports = VendorUsers;