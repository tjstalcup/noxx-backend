
exports.up = function(knex) {
    return knex.schema.createTable('cards', function(table){
        table.increments('id').primary()
        table.string('player_name',255)
        table.string('variety',255)
        table.string('card_number',255)
        table.string('set',255)
        table.integer('year')
        table.text('image_url')
        table.integer('total_graded')
    })
  };
  
  exports.down = function(knex) {
        return knex.schema
          .dropTable("cards")
  };
  