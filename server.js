const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/dbConnection");
const contactRouter = require("./routes/contactRoute");
const userRouter = require("./routes/userRoute");
const errorHandler = require("./middlewares/errorHandler");

dotenv.config();

connectDb();
const app = express();

const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());

//Mounting routes
app.use("/api/contacts", contactRouter);
app.use("/api/users", userRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
