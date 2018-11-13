var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose');
var Schema = mongoose.Schema;

var animalSchema = new Schema({ name: String, type: String });

animalSchema.query.byName = function(name) {
    return this.where({ name: new RegExp(name, 'i') });
};

var Animal = mongoose.model('Animal', animalSchema);

Animal.find().byName('fido').exec(function(err, animals) {
    console.log(animals);
});

Animal.findOne().byName('fido').exec(function(err, animal) {
    console.log(animal);
});