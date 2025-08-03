module.exports = {
  mongoURI: process.env.MONGO_URI || "mongodb://0.0.0.0:27017",
  secretOrKey: process.env.JWT_SECRET || "secret",
};
