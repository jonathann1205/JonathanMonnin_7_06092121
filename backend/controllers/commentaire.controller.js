const db = require("../models/");
const Commentaires = db.commentaire;
const User = db.users;
const Op = db.Sequelize.Op;

// creer un commentaire
exports.createCommentaire = (req, res, next) => {
  const commentaire = new Commentaires( {
    message: req.body.message,
    articleId: req.body.articleId,
    userId: req.body.userId,
    lastnameUser: req.body.lastname,
    image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
  });
  commentaire.save()
    .then(() => {
      res.send(commentaire);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur s'est produite lors de la création du commentaire "
      });
    });

};

// recuperer tous les commentaires
exports.findAll = (req, res, next) => {

  const articleId = req.params.id ;
 
  Commentaires.findAll({
    where: { articleId: articleId   }, 
    order: [['updatedAt', "DESC"], ['createdAt', "DESC"]] })
  
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "erreur lors de la récupération des Commentaires"
      });
    });
};

//delete all commentaire quand on supprime le post
exports.deleteCommentaire = (req, res, next) => {
  const articleid = req.params.id;

  Commentaires.destroy({
    where: { articleId: articleid   }, 
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "commentaire supprimé!"
        });
      } else {
        res.send({
          message: `Impossible de supprimer le commentaire avec l'id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "erreur lors de la suppression du commentaire avec l'id=" + id
      });
    });
};