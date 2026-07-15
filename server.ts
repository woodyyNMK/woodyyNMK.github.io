import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Setup Vite development server or production static serving
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite middleware mounted in development mode.");
  } else {
    const docsPath = path.join(process.cwd(), "docs");
    app.use(express.static(docsPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(docsPath, "index.html"));
    });
    console.log("Serving static files from docs directory.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

setupServer().catch((err) => {
  console.error("Error starting server:", err);
});

