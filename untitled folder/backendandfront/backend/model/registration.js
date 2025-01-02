const mongoose = require("mongoose");

const RegistrationScheme = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// RegistrationScheme.pre("save", async function (next) {
//   if (!this.isModified("password")) return next(); // this refers to the current user, this.isModified("password")) = checks if password filed has been updated or not
//   const salt = await bcrypt.genSalt(10); // bcrypt.genSalt(10) = Generates a "salt" (a random string) to be added to the password before hashing.
//   //The 10 is the "cost factor" that determines the complexity of the salt generation.
//   //await = Ensures that the function waits for the salt to be generated before proceeding.
//   this.password = await bcrypt.hash(this.password, salt); // this.password Updates the password field of the current user document with the hashed password.
//   //bcrypt.hash(this.password, salt);
//   next(); //next(); redirect to the save function after hashing is completed
// });

const User = mongoose.model("DataList", RegistrationScheme);

module.exports = User;
