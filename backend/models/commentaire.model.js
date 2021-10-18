module.exports = (sequelize, Sequelize) => {
    const Commentaires =  sequelize.define('commentaire', {
       'message': {
         type: Sequelize.STRING,
         allowNull: false,
         required: true
       },
       'image': {
         type: Sequelize.STRING,
         allowNull: true,
         required: false
       },
       'articleId': {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        requierd: true
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
       tableName: 'Commentaires',
       freezeTableName: true
     });
    //  Commentaires.belongsTo(user, { foreignKey: 'userId', onDelete:'cascade' });
    //  Commentaires.belongsTo(article, { foreignKey: 'articleId', onDelete:'cascade' });
     return Commentaires
   };