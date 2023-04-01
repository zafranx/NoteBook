const express = require("express");
//  cors is used to fix error , front end se direct api hit nhi kar sakte error aati hai isliye cors use karte hai
const cors = require("cors");
const connectToMongo = require("./config");
connectToMongo();
const app = express();
app.use(cors());
const port = 8000;
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.use("/api/blog", require("./routes/blog"));

app.get("/", (req, res) => res.send("Hello Zafran"));
app.listen(port, () => {
  console.log(`Webereum App  listening at http://localhost:${port}`);
});
