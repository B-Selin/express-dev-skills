var express = require('express');
var router = express.Router();


// Require the controller that exports skills CRUD functions
var skillsCtrl = require('../controllers/skills');


module.exports = router;

// GET /skills
router.get('/', skillsCtrl.index);

// GET /skills/:id
router.get('/:id', skillsCtrl.show)

