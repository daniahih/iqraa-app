const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
const connectDb = require("./Config/dbConnection");
connectDb();
const userRouter = require("./Routes/UserRouter");
const booksRouter = require("./Routes/BookRouter");
const categoriesRouter = require("./Routes/CategoriesRouter");
const EmostionsRouter = require("./Routes/EmotionRouter");
const errorHandler = require("./middleware/errorHandler");
const { Uploadrouter } = require("./Controllers/UploadFile");

app.use(express.json());
// main route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
//other route
app.use("/api/users", userRouter);
app.use("/api/books", booksRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/emotions", EmostionsRouter);
app.use("/api/upload", Uploadrouter);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
