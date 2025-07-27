import path from "path";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config({
  path: ".env" //it is a secrect
})
const __dirname = path.resolve();

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

console.log("Serving from:", process.env.BASE_URL);
console.log("CORS ORIGIN is:", process.env.CORS_ORIGIN);

//common middleware
app.use(express.json({ limit: "22kb" })); //16kb
app.use(express.urlencoded({ extended: true, limit: "22kb" }));
app.use(express.static("public"));
// cooki parser middile ware for cloudinary
app.use(cookieParser());

//import routes
import healthcheck from "./routes/healthCheck.route.js";
import urlRoutes from "./routes/url.route.js";

//routes
app.use("/api", healthcheck);
app.use("/", urlRoutes);

//  Static frontend serving after API routes
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  //  Keep this LAST so it doesn’t override `/api/...`
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

export default app;
