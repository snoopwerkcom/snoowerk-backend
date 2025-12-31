import express from "express";
import cors from "cors";

console.log("SERVER.JS BOOTED");

const app = express();
const port = process.env.PORT || 8080;

/* ===== Middleware ===== */
app.use(cors());
app.use(express.json());

/* ===== Health / Credits ===== */
app.get("/api/v1/user/credits", (req, res) => {
  res.status(200).json({
    remaining: 10,
    total: 10,
  });
});

/* ===== Generate Image (TEST ENDPOINT) ===== */
app.post("/ai/generate-image", (req, res) => {
  console.log("CONNECTED: POST /ai/generate-image");
  console.log("BODY:", req.body);

  res.status(200).json({
    imageUrl: "https://via.placeholder.com/512",
    credits: { remaining: 9 },
  });
});

/* ===== Start Server ===== */
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
