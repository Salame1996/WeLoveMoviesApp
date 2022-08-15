
exports.up = function(knex) {
    return knex.schema.createTable("reviews", (table) => {
        table.increments("review_id").primary();
        table.string("content");
        table.integer("score");
        table.foreign("movie_id")
        .references("movie_id")
        .inTable("movies")
        .onDelete("cascade");
        table.foreign("critic_id")
    .references("critic_id")
    .inTable("critics")
    .onDelete("cascade");
        table.timestamps(true, true); // Adds created_at and updated_at columns
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("reviews");
};
