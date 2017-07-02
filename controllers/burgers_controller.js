var express = require("express");
var db = require("../models");

// Create and export router. 

var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  db.burger.findAll({}).then(function (results) {
    res.json(results)
  });
  // burgers.all(function(data) {
  //   var hbsObject = {
  //     burgers: data
  //   };
  //   console.log(hbsObject);
  //   res.render("index", hbsObject);
  // });
});

router.post("/", function (req, res) {

db.Burger.create({
      name: req.body.name,
      devoured: req.body.devoured
      }).then(function(results){
        res.end();
      });


  // burgers.create([
  //   "burger_name", "devoured"
  // ], [
  //     req.body.burger_name, req.body.devoured
  //   ], function () {
  //     res.redirect("/");
  //   });
});

router.put("/:id", function (req, res) {

 db.Burger.update(
      {
        devoured: req.body.devoured,
      }, {
        where: {
          id: req.body.id,
        }
      }
    ).then(function (dbBurger) {
      res.json(dbBurger);
    });

  // var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  // burgers.update({
  //   devoured: req.body.devoured
  // }, condition, function () {
  //   res.redirect("/");
  // });
});


router.delete("/:id", function (req, res) {

  db.Burger.destroy({
      where: {
        id: req.params.id,
      }
    }).then(function (results) {
      res.end();
    })

  // var condition = "id = " + req.params.id;

  // burgers.delete(condition, function () {
  //   res.redirect("/");
  // });
});

// Export routes for server.js to use.
module.exports = router;
