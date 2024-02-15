require("dotenv").config();
const express = require("express");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const router = require("./router/auth-router");
const errorMiddleware = require("./middlewale/error-middleware");
const cors = require("cors");
const serviceRoute = require("./router/service-route");
const adminRouter = require("./router/admin-router");

const app = express();
const PORT = 5000;

//  get the cors from middleware.
const optioCors = {
  origin: "http://localhost:5173",
  method: "GET, POST, PUT DELETE, PATCH, HEADER",
  credentials: true,
};
app.use(cors(optioCors));

// User a admin router
app.use("/api/admin", adminRouter);

// These are the routes.
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

app.use(errorMiddleware);

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
