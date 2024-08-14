const {default:mongoose} = require("mongoose");
/**
 * Establishes a connection to the MongoDB database using Mongoose.
 *
 * This function attempts to connect to the database specified by the environment variable BD_CNN.
 * It logs "DB Online" upon successful connection and throws an error if the connection fails.
 *
 * @returns {Promise<void>} - Resolves on successful connection, rejects on failure.
 */
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.BD_CNN);
    console.log("DB Online");
  } catch (error) {
      console.log(error);
      throw new Error("Failed to establish a connection to the database.");
  }
};

module.exports = {
    dbConnection
}