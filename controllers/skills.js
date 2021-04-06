const Skill = require('../models/skill');

module.exports = {
    index: index,
    show: show,
    new: newSkill,
    create: create,
    delete: deleteSkill,
    edit: edit,
    update: update, 
};

function index (req, res, next) {
    res.render('skills/index', {
    skills: Skill.getAll(),
    time: req.time
    });
}

function show (req, res, next) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillsNum: parseInt(req.params.id) + 1
    });
}

function newSkill (req, res, next) {
    res.render('skills/new');
}

function create (req, res, next) {
    // console.log(req.body);
    req.body.done = false; 
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res, next) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function edit (req, res, next) {
    res.render('skills/edit', {
		skill: Skill.getOne(req.params.id),
		idx: req.params.id,
	});
}

function update (req, res, next) {
    req.body.done = req.body.done === 'on';
	Skill.update(req.params.id, req.body);
	res.redirect('/skills');
}