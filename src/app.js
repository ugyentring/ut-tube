import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//cors middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//json middleware
app.use(
  express.json({
    limit: "16kb",
  })
);

export { app };
