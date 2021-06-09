exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe: 'Speghetti Bolognese' },
        { recipe: 'Cowboy Grilled Rib Eyes' },
        { recipe: 'Puerto Rican Pork Roast' },
      ]);
    });
};
