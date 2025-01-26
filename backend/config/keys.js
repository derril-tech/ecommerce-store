// backend/config/keys.js

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID, // Google OAuth Client ID
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET, // Google OAuth Client Secret
  mongoURI: process.env.MONGO_URI, // MongoDB Connection URI
  cookieKey: process.env.COOKIE_KEY, // Cookie Key for secure sessions
  jwtSecret: process.env.JWT_SECRET, // JWT Secret for authentication (if applicable)
  nodeEnv: process.env.NODE_ENV, // Current Node environment (development/production)
  port: process.env.PORT, // Port for the server
};
