import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRouter from "./route/book.route.js";
import userRouter from "./route/user.route.js";
const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to mongodb
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error:", error);
}
//defining routes
app.use("/book", bookRouter);
app.use("/user", userRouter);
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
