import express from "express";
import todoRouter from "./routes/todo.route";

const app = express();

app.get("/", (req, res) => {
  console.log("Hello World!");
  res.send("Hello World!");
})

app.use("/todos", todoRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});