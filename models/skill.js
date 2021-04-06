const skills = [
    {skill: 'Javascript', done: true},
    {skill: 'HTML5', done: true},
    {skill: 'CSS', done: true},
    {skill: 'DOM Manipulation', done: true},
    {skill: 'Functions', done: true},
    {skill: 'Objects and Classes', done: true},
    {skill: 'Arrays', done: true},
    {skill: 'gitHub Version Control', done: true},
    {skill: 'gitHub Deployment', done: true},
    {skill: 'HTTP & REST', done: true},
    {skill: 'NodeJS and ExpressJS', done: true},
    {skill: 'MongoDB and Mongoose', done: false},
    {skill: 'MongooseJS ODM', done: false},
    {skill: 'Data Modeling', done: false},
  ];
  
  module.exports = {
    getAll,
    getOne,
    create, 
    deleteOne,
    update, 
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills[id];
  }

  function create(skill) {
    skills.push(skill);
  }

  function deleteOne(idx) {
    skills.splice(idx, 1); 
  }

  function update (idx, skill) {
    skills.splice(idx, 1, skill)
  }