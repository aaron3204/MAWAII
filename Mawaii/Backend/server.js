import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "/Users/suzal/Developer/NewProject/Backend/routes/userRoutes.js";
import chatRoutes from "/Users/suzal/Developer/NewProject/Backend/routes/chatRoutes.js";
import { notFound, errorHandler } from "/Users/suzal/Developer/NewProject/Backend/middleware/errorMiddleware.js";

dotenv.config();
connectDB();
const app = express();
const port = 8888;

app.use(express.json());

app.use("/api/user",userRoutes);
app.use("/api/chat",chatRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
