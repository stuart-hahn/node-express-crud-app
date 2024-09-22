const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const itemRoutes = require("./routes");

const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running! You better go catch it.");
});

app.use("/api", itemRoutes);

// Port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
