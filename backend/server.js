const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const socketIo = require("socket.io");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: "*" }
});

app.use(cors());
app.use(express.json());
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);
const taskRoutes = require("./routes/tasks");
app.use("/api/tasks", taskRoutes);


const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Katomaran Todo Backend is running 🚀");
});

// MongoDB connect
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("✅ MongoDB Connected");
  server.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
})
.catch(err => console.error("❌ MongoDB Connection Failed", err));
