import express from "express";
import { connectDB } from "./utils/features.js";
import { config } from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
// importing routes
import userRoute from "./routes/user.js";
config({
    path: "./.env",
});
const port = process.env.PORT || 4040;
const mongoURI = process.env.MONGO_URI || "";
connectDB(mongoURI);
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("API Working with /api/v1");
});
// using Routes
app.use("/api/v1/user", userRoute);
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`Server is running on:${port}`);
});
