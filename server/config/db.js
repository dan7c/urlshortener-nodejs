const mongoose = require('mongoose');
const config = require('config');
const db = config.get("mongoURI");

const dbConn = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("DB Connected")
  } catch (error) {
    console.error(error.message);
    process.exit(1)
  }
}



module.exports = dbConn;
