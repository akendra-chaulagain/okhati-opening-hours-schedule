const express = require("express");
const app = express();
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth");

// dotenv package is used to secure the prive file  (config)
dotenv.config({ path: "./config.env" });

// port number
const PORT = process.env.PORT;

// middleware for json
app.use(express.json());


// middleware
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server is running in port no: ${PORT} `);
});
