let seeder = require('mongoose-seed');
let data = require('./data.json');

seeder.seed(data).then(function() {
    console.log('The database objects are stored in dbData');
}).catch(function() {
    console.log('An error has occurred');
});