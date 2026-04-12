import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Hello World!");
})

app.get("/todos", (req, res) => {

})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});