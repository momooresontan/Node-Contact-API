const express = require("express");
const dotenv = require("dotenv");
const contactRouter = require("./routes/contactRoute");
const errorHandler = require("./middlewares/errorHandler");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());

//Mounting routes
app.use("/api/contacts", contactRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
