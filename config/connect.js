//connect to database mongoose
const mongoose = require ('mongoose')


const connectdb =async () =>{
    try {
        await mongoose.connect("mongodb://localhost:27017/PersonDB",{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to the DB')
    } catch (error) {
        console.log(err)
    }
};

module.exports = connectdb;
//k6rZD5t48UxtUVL