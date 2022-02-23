const cardService = {
    getAllCards(knex) {
        return knex.select("*").from("cards");
    },
};

module.exports = cardService;