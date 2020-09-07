const express = require("express");
const app = express();
const path = require("path");
const jsonServer = require("json-server");
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
app.use(middlewares);
app.use(router);
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
