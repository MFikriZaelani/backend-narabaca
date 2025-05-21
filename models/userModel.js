const db = require("../config/db");

const getAllUsers = async () => {
  const result = await db.query(
    "SELECT user_id, username, email, created_at, updated_at, last_login FROM users"
  );
  return result.rows;
};

const createUser = async ({ username, passwordHash, email }) => {
  const result = await db.query(
    `INSERT INTO users (username, password_hash, email) 
     VALUES ($1, $2, $3) RETURNING user_id, username, email, created_at`,
    [username, passwordHash, email]
  );
  return result.rows[0];
};

module.exports = {
  getAllUsers,
  createUser,
};
