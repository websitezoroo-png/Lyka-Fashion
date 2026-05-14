import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import pool from "./db.js";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  app.use(express.json());
  app.use(cors());
  
  const server = createServer(app);

  // API Endpoints
  app.get("/api/products", async (_req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM products ORDER BY created_at DESC");
      res.json(rows);
    } catch (error) {
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
      res.status(500).json({ error: "Failed to add product" });
    }
  });

  app.get("/api/settings", async (_req, res) => {
    try {
      const [rows]: any = await pool.query("SELECT * FROM settings LIMIT 1");
      res.json(rows[0] || {});
    } catch (error) {
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
      res.status(500).json({ error: "Failed to update settings" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (req, res) => {
    if (req.path.startsWith("/api")) {
      res.status(404).json({ error: "API endpoint not found" });
    } else {
      res.sendFile(path.join(staticPath, "index.html"));
    }
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
