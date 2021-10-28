const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.posts = require("./post.model.js")(sequelize, Sequelize);
db.commentaire = require("./commentaire.model")(sequelize, Sequelize);

db.users.hasMany(db.posts, {ondelete: "CASCADE"});
db.users.hasMany(db.commentaire, {ondelete: "CASCADE"});

db.posts.hasMany(db.commentaire, {ondelete: "CASCADE"});
db.users.belongsTo(db.users, {ondelete: "CASCADE"});

db.commentaire.belongsTo(db.users, {ondelete: "CASCADE"});
db.commentaire.belongsTo(db.posts, {ondelete: "CASCADE"});


module.exports = db;