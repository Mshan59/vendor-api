const {DataTypes, QueryTypes} = require('sequelize');
const sequelize = require('../config/database');
const { SELECT } = require('sequelize/lib/query-types');

exports.getVendorUsers =async (req,res) =>{
    const{prId,cusOrgiId} =req.query;

    if(!prId || !cusOrgiId){
        return res.status(400).json({error:" prId and cusOrgiId are requires"});
    }
    try{
        const result = await sequelize.query(

            `
            SELECT DISTINCT 
            sup.id As supplierId,
            vu.UserName,
            vu.Name
            FROM(
           SELECT unset(string_to_array(suppliers,',')):: int As id
          FROM "PrLineItems"
          WHERE "purchaseRequestId" = : prId AND  "custOrgId" = :custOrgId 
            )sup
            JOIN "VendorUsers" vu ON sup.id = "VendporOrgId"`,
            {
                replacements: {prId,custOrgId},
                type: QueryTypes.SELECT
            }
        );

        res.json(results);
    }
    catch (error){
        console.error('Databse query error :',error);
        res.status(500).json({error:'internal Server Error'})
    }
} ;