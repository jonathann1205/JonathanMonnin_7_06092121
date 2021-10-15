const db = require("../models");
const Articles = db.posts;
const User = db.users;
const Op = db.Sequelize.Op;



exports.createArticle = (req, res, next) => {
  const article = new Articles({
    message: req.body.message,
    userId: req.body.userId,
    image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
  });
  article.save()
    .then(() => {
      res.send(article);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur s'est produite lors de la création de l'article "
      });
    });

};

exports.findAll = (req, res, next) => {
  Articles.findAll({
    // include: [{model: User}],
    order: [['updatedAt', "DESC"], ['createdAt', "DESC"]] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "erreur lors de la récupération des articles"
      });
    });
};

exports.getOneArticle = (req, res, next) => {
  const id = req.params.id;
  console.log(id);
 Articles.findByPk(id)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: "Problème de récupération de l'article avec l'id=" + id
    });
  });
 };

 exports.modifyArticle = (req, res, next) => {
  const id = req.params.id;
  const modification = req.file ? {
    message: req.body.message,
    userId: req.body.userId,
    image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
  } : {  
    message: req.body.message,
    userId: req.body.userId,}
    
  Articles.update(modification, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "L'article est modifié"
        });
      } else {
        res.send({
          message: `Impossible de mettre à jour l'article avec l'id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "erreur lors de la mise à jour de l'article avec l'id=" + id
      });
    });
};

exports.deleteArticle = (req, res, next) => {
  const id = req.params.id;

  Articles.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Article supprimé!"
        });
      } else {
        res.send({
          message: `Impossible de supprimer l'article avec l'id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "erreur lors de la suppression de l'article avec l'id=" + id
      });
    });
};