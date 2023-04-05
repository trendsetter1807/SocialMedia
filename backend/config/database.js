const mongoose = require("mongoose");
const uri="mongodb+srv://Pratik:Pratik1807@cluster0.7thpltd.mongodb.net/?retryWrites=true&w=majority"

exports.connectDatabase = () => {
  mongoose
    .connect(uri,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true })
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
