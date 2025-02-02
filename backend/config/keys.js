require("dotenv").config();

module.exports = {
  mongoURI: process.env.MONGO_URI, // MongoDB Connection URI
  cookieKey: process.env.COOKIE_KEY, // Cookie Key for secure sessions
  jwtSecret: process.env.JWT_SECRET, // JWT Secret for authentication
  nodeEnv: process.env.NODE_ENV, // Current Node environment
  port: process.env.PORT, // Port for the server
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
};
