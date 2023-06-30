const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Oleksandr:oJFySbdLCFAExYt2@cluster0.gmmk6zx.mongodb.net/contacts_list?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
