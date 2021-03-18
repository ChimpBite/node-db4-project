exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { recipe: 'Speghetti Bolognese' },
        { recipe: 'Cowboy Grilled Rib Eyes' },
        { recipe: 'Puerto Rican Pork Roast' },
      ]);
    });
};
