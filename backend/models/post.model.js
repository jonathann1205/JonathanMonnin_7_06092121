module.exports = (sequelize, Sequelize) => {
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
     'lastnameUser': {
      type: Sequelize.STRING,
      allowNull: false,
      required: true
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
  //  Articles.belongsTo(user, { foreignKey: 'Id', onDelete:'cascade' });
   return Articles
 };