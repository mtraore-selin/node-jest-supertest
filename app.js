import express from "express";
const app = express();

app.post("/users", (req, res) => {
  res.status(200).json({
    id: "id",
    name: "John",
    email: "<EMAIL>",
    password: "<PASSWORD>",
  });
});

export default app;
