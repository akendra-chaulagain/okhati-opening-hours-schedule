const express = require("express");
const app = express();


// dotenv package is used to secure the prive file  (config)
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });


// routes
const authRoutes = require("./routes/auth");
const scheduleRoutes = require("./routes/schedule");


// port number
const PORT = process.env.PORT;

// middleware for json
app.use(express.json());

// middleware
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/schedule", scheduleRoutes);

app.listen(PORT, () => {
  console.log(`server is running in port no: ${PORT} `);
});
