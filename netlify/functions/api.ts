import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import pool from "../../server/db.js";

const app = express();
app.use(express.json());
app.use(cors());

// API Endpoints
app.get("/api/products", async (_req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products ORDER BY created_at DESC");
    res.json(rows);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.post("/api/products", async (req, res) => {
  const { name, description, price, originalPrice, category, imageUrl, stock } = req.body;
  try {
    const [result]: any = await pool.query(
      "INSERT INTO products (name, description, price, originalPrice, category, imageUrl, stock) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, description, price, originalPrice, category, imageUrl, stock]
    );
    res.json({ id: result.insertId, ...req.body });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Failed to add product" });
  }
});

app.get("/api/settings", async (_req, res) => {
  try {
    const [rows]: any = await pool.query("SELECT * FROM settings LIMIT 1");
    res.json(rows[0] || {});
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Failed to fetch settings" });
  }
});

app.post("/api/settings", async (req, res) => {
  const { websiteName, heroTitle, heroSubtitle, heroDescription, backgroundVideoUrl } = req.body;
  try {
    await pool.query(
      "UPDATE settings SET websiteName = ?, heroTitle = ?, heroSubtitle = ?, heroDescription = ?, backgroundVideoUrl = ? WHERE id = 1",
      [websiteName, heroTitle, heroSubtitle, heroDescription, backgroundVideoUrl]
    );
    res.json(req.body);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Failed to update settings" });
  }
});

export const handler = serverless(app);
