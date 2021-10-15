module.exports = (sequelize, Sequelize, user) => {
  const Articles =  sequelize.define('article', {
     'message': {
       type: Sequelize.STRING,
       allowNull: false,
       required: true
     },
     'image': {
       type: Sequelize.STRING,
       allowNull: false,
       required: true
     },
     'userId': {
       type: Sequelize.INTEGER(11),
       allowNull: false,
       requierd: true
     },
     'createdAt': {
       allowNull: false,
       type: Sequelize.DATE,
       defaultValue: Sequelize.NOW,
     },
    'updatedAt': {
       allowNull: false,
       type: Sequelize.DATE,
       defaultValue: Sequelize.NOW,
     },
 
   }, {
     tableName: 'Articles',
     freezeTableName: true
   });
  //  Articles.belongsTo(user, { foreignKey: 'userId', onDelete:'cascade' });
   return Articles
 };