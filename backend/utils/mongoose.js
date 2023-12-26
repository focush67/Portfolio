const mongoose = require("mongoose");
const uri = require("./temp");

if(!uri){
    uri = process.env.REACT_APP_MONGO_URI;
}

mongoose.connect(uri).then(() => {
    console.log("Connected to DB");
}).catch((error) => {
    console.log("MONGO URI: ",uri);
    console.log(error.message);
})