require("dotenv").config();
const express = require("express");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewale/error-middleware");
const cors = require("cors");
const serviceRoute = require("./router/service-route");
const adminRouter = require("./router/admin-router");

const app = express();
const PORT = 5000;

// Set up CORS middleware to allow requests from your Firebase Hosting domain
app.use(
  cors({
    origin: "https://ashutosh-portfolio-mern.web.app",
    methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS", // Add OPTIONS method
    credentials: true,
  })
);

// Use the admin router
app.use("/api/admin", adminRouter);

// Set up your routes
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Your server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
};

startServer();