import express from "express";
import APIRouter from "./Routers/API";
import path from "path";
const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", APIRouter);

app.get("/", function (req, res) {
  res.redirect("/ui");
});

app.get("/ui", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(5000, () => console.log(`listening to port ${5000}`));
