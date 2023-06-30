var express = require('express');
var router = express.Router();


// Require the controller that exports skills CRUD functions
var skillsCtrl = require('../controllers/skills');


module.exports = router;

// GET /skills
router.get('/', skillsCtrl.index);


// We will create the crud method to create a new skill, in the new page
router.get('/new', skillsCtrl.new);

// we now have the skillsCtrl so now we will go to the controllers to actually create the method.
// get the new skill then create the property for the new skill

// GET /skills/:id
router.get('/:id', skillsCtrl.show)
