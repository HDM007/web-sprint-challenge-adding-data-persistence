exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        {resource_name: 'Bender Bending Rodriguez', resource_description: 'Do you see a robot around here named F-O-O-OLDER?'},
        {resource_name: 'Socks', resource_description: 'put em on yer feet'}
      ]);
    });
};