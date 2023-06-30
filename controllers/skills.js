// we are accessing the skill file - importing
const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
};

function deleteSkill(req, res){
  Skill.deleteOne(req.params.id); //we have to define a deleteOne function in the models.req.params.id is how we choosing the skill we are deleting. We will probably have to a skill.id === id in models.
  res.redirect('/skills');
}

function create (req, res){
  Skill.create(req.body); //body is like a set of property within our models/skill.js object
  console.log(req.body);
  res.redirect('/skills');
}
// adding new skill, data is collected from the from element in the new.ejs page
function newSkill(req, res) {
  res.render('skills/new', { title: 'New Skill' });
}

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll()
  });
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
  })
}

