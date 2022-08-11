//missing imageurl what table. should i use 

exports.up = function (knex) {
  return knex.schema.createTable("movies", (table) => {
    table.increments("movie_id").primary();
    table.string("runtime_in_minutes");
    table.string("rating");
    table.string("description");
    table.timestamps(true, true); // Adds created_at and updated_at columns 
  });
};
exports.down = function (knex) {
    return knex.schema.dropTable("movies");
};
