
exports.seed = function(knex) {
  return knex('projects').truncate()
  .then(function () {
    return knex('projects').insert([
      {project_name: 'Build DooperComputer', project_description: 'channel all energy to main dooper computer and fire on my mark', project_completed: false},
      {project_name: 'Bender is Great', project_description: 'B-E-N-D-E-R BENDER', project_completed: false}
    ]);
  });
};