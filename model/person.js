const mongoose = require ('mongoose')

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type: Number
    },
    favouritFoods:[String]
});

const Person = mongoose.model('person', personSchema);
module.exports = Person;
