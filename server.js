const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;

const app = express();

app.use(express.static(path.join(__dirname, "./portfolio/dist")));

const server = app.listen(port, () => console.log(`Listening on port ${ port }`));