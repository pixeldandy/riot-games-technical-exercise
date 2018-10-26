const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send({
		gameId: 3013089602,
		summonerId: "hi",
		participants: [{
			summonerId: 9235720,
			summonerName: "Lopes VoHiYo",
			teamId: 200,
			championId: 202,
			championName: "Jhin",
			championMastery: 1
		}, {
			summonerId: 38398777,
			summonerName: "flachgelegt",
			teamId: 100,
			championId: 157,
			championName: "Yasuo",
			championMastery: 6
		}]
	});
});

app.listen(port, () => console.log(`Web server listening on port ${port}`));
