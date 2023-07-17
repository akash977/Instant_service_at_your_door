const mongoose = require('mongoose');

const DB_URI="mongodb+srv://akashgupta:Agupta10@cluster0.adyvzkv.mongodb.net/"

const connectDatabase = ()=>{

    //console.log(process.env.DB_URI);
    mongoose.connect(DB_URI,{
        //useNewUrlParser: true, 
        useUnifiedTopology: true,
        //useCreateIndex: true
    }).then((data)=>{
    console.log(`Mongodb connected with server: ${data.connection.host}`); 
    });
   
}


module.exports = connectDatabase;
