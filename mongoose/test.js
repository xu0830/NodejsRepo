const mongoose = require('mongoose');
const time = require('time-formater')

let rawDate = time(new Date()).format('YYYY-MM-DD HH:mm:ss') // current time
console.log(rawDate) // 2017-05-21 15:19:34
// mongoose.connect('mongodb://localhost/mongoose');
//
// const Cat = mongoose.model('Cat', { name: String });
//
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));