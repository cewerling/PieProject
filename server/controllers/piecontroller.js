// const express = require('express');
// const router = express.Router();
const router = require('express').Router();
const Pie = require('../db').import('../models/pie');
const validateSession = require('../middleware/validate-session');

// router.get('/', (req, res) => res.send('Pies are super great!'));

router.get('/', (req, res) => {
    Pie.findAll()
      .then(pie => res.status(200).json(pie))
      .catch(err => res.status(500).json({
          error:err
      }))
})



router.post('/', validateSession, (req, res) => {
    const pieFromRequest = {
        nameOfPie: req.body.nameOfPie,
        baseOfPie: req.body.baseOfPie,
        crust: req.body.crust,
        timeToBake: req.body.timeToBake,
        servings: req.body.servings,
        rating: req.body.rating,
    }
    Pie.create(pieFromRequest)
      .then(pie => res.status(200).json(pie))
      .catch(err => res.json(req.errors))
})



router.get('/:name', (req, res) => {
    Pie.findOne({ where: { nameOfPie: req.params.name }})  // One needs to be capitalized.  req.params.nameOfPie to preq.params.name
      .then(pie => res.status(200).json(pie))
      .catch(err => res.status(500).json({ error: err }))
  })



  router.put('/:id', (req, res) => {
    Pie.update(req.body, { where: { id: req.params.id }})    // Pie (capitalize)    req.body to req.params
      .then(pie => res.status(200).json(pie))
      .catch(err => res.json({error: err}))      // req.errors changes to error: err
  })

// ********************
// Challenge (4/9/20): Delete by ID
// ********************

/*****************************************
 * DELETE by ID
 ****************************************/
/* router.delete('/:id', function(req, res) {
  var data = req.params.id;
  // var userid = req.user.id;

  Pie
      .destroy ({
          where: { id: data }
      })
      .then (
          function deleteLogSuccess(data) {
              res.send("you removed a log");
          },
          function deleteLogError(err) {
              res.send(500, err.message);
          }
      );
});
*/

// Danielle's code (4/9/20):
router.delete('/:id', (req, res) => {

  Pie.destroy ({
    where: {
      id: req.params.id
    }
  })
  .then (pie => res.status(200).json(pie))
  .catch(err => res.json({
    error: err
  }))
})






module.exports = router;