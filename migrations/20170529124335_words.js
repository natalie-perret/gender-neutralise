
exports.up = function(knex, Promise) {
  return knex.schema.createTable('words', function(table) {
    table.increments('id').primary()
    table.string('bias')
    table.string('neutral')
    table.text('notes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('words')
};
