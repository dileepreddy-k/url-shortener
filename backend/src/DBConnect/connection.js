const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

const dbConnect = () => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },
        (err) => {
            if (err) console.log(err)
            else console.log("mongdb is connected");
        }
    );
}

module.exports = dbConnect;