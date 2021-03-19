

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: 'Squad up in WZ', task_notes: 'Mike and Kenta will likely be late', task_completed: false, project_id: 1},
        {task_description: 'Get some snacks', task_notes: 'snacks snacks snacks snacks snacks', task_completed: false, project_id: 2},
      ]);
    });
};