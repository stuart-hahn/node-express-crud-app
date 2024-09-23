const pool = require("../db");

exports.getItems = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM items");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching items: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
