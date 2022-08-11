
exports.up = function(knex) {
    return knex.schema.createTable("reviews", (table) => {
        table.increments("review_id").primary();
        table.string("content");
        table.integer("score");
        table.increments("movie_id").primary();
        table.increments("critic_id").primary();
        table.timestamps(true, true); // Adds created_at and updated_at columns
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("reviews");
};
