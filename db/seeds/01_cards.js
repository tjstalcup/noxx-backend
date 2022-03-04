
exports.seed = async function(knex) {
  
  const csvFilePath='db/carddata.csv'
  const csv=require('csvtojson')
  

  const jsonArray=await csv().fromFile(csvFilePath);
// Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert(jsonArray);
    });
};
