const {Sequelize } =require('sequelize');
const sequelize = new Sequelize ("conqtvms_dev","candidate", "NoTeDeSt^C10.6?SxwY882}",{
    host:'nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com',
    dialect: 'mysql'
});

module.exports = sequelize;