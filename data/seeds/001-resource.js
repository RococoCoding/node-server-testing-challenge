
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: 'rowValue1'},
        {name: 'rowValue2'},
        {name: 'rowValue3'}
      ]);
    });
};
