// we are accessing the skill file - importing
const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
};

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

