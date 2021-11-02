require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(cors({
  origin: "*"
}));

app.use(express.json())


app.use("/", express.static(`./fronte/dist`));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./fronte/dist/html");
});
const urlsRouters=require("./backEnd/routers/urlsRouters")


app.use("/api" , urlsRouters)


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

