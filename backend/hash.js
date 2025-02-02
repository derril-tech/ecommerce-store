const bcrypt = require("bcrypt");

const hashPassword = async () => {
  const password = "testlogin"; // Change this if needed
  const saltRounds = 10; // Cost factor
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log("Hashed Password:", hashedPassword);
};

hashPassword();
