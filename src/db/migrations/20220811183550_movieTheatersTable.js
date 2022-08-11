//make sure table.incremets is coorrecton both.

exports.up = function (knex) {
  return knex.schema.createTable("movies_theaterTable", (table) => {
    table.increments("movie_id").primary();
    table.increments("theater_id").primary();
    table.boolean("is_showing");
    table.timestamps(true, true); // Adds created_at and updated_at columns
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("movies_theaters");
};
