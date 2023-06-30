var express = require('express');
var router = express.Router();


// Require the controller that exports skills CRUD functions
var skillsCtrl = require('../controllers/skills');


module.exports = router;

// GET /skills
router.get('/', skillsCtrl.index);


// We will create the crud method to create a new skill, in the new page, we want this before the get/show because I dont actually know the because

router.get('/new', skillsCtrl.new);

// we now have the skillsCtrl so now we will go to the controllers to actually create the method.


// GET /skills/:id
router.get('/:id', skillsCtrl.show)


// get the new skill then create the property for the new skill
// create new post POST/ just regular endpoint, and create action

router.post('/', skillsCtrl.create);

//now we want to Delete something with a specific id

router.delete('/id', skillsCtrl.delete)

// now we have to create a delete function in controllers and also in the models because we want to update the skills array too
