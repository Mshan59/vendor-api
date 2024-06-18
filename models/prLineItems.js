const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const PrLineItems = sequelize.define('PrLineItems',{
    suppliers: {type:DataTypes.STRING},
    custOrgid: {type:DataTypes.INTEGER},
    purchaseRequestId: {type:DataTypes.INTEGER},
 }, {timestamps: false}
);
module.exports = PrLineItems;