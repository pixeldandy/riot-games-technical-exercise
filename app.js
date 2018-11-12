const path = require("path");
const express = require("express");
const app = express();
const game1 = require('./game-1.json')
const game2 = require('./game-2.json')
const port = process.env.PORT || 3000;

app.get("/game/2", (req, res) => {
	res.json(game2);
});

app.get("*", (req, res) => {
	res.json(game1);
});

app.listen(port, () => console.log(`Web server listening on port ${port}`));
