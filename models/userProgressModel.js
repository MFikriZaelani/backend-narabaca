const db = require("../config/db");

const getAllProgresses = async () => {
  const result = await db.query(`
    SELECT 
      progress_id, user_id, progress_type, total_score, created_at 
    FROM user_progresses 
    ORDER BY created_at DESC
  `);
  return result.rows;
};

const createProgress = async ({ user_id, progress_type, total_score }) => {
  const result = await db.query(
    `INSERT INTO user_progresses (user_id, progress_type, total_score)
     VALUES ($1, $2, $3)
     RETURNING progress_id, user_id, progress_type, total_score, created_at`,
    [user_id, progress_type, total_score]
  );
  return result.rows[0];
};

module.exports = {
  getAllProgresses,
  createProgress,
};
