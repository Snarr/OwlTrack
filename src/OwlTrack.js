const config = require('../config.json');
const twitter = require('./Twit');
const unsplash = require('./Unsplash')
const Colors = require('./Colors');

const fsPromises = require('fs').promises;
const axios = require('axios');
const imageToBase64 = require('image-to-base64');

const fetch = require('node-fetch');
global.fetch = fetch;

const OwlTrack = () => {
	Colors.log("OwlTrack started!", "green");

	setInterval(async () => {
		let response = await axios.get(`${config.api.url}?wrapAPIKey=${config.api.key}`);
	
		data = response.data.data;
		totalCases = data.total[0].total;
	
		let oldCases = await getLocalData();
		let totalOldCases = oldCases.total[0].total;
	
		if (totalCases != totalOldCases) {
			Colors.log('change in case numbers', "cyan");
			await fsPromises.writeFile('./data.json', JSON.stringify(data));
			let difference = totalCases - totalOldCases;
			await tweetUpdates(difference, totalCases);
		} else {
			Colors.log('no change in case numbers', "cyan");
		}
	
		Colors.log(`${totalCases}/${totalOldCases}`, "purple");
	}, config.interval*60*1000)
}

async function getLocalData() {
	let data = await fsPromises.readFile('./data.json');
	return JSON.parse(data);
}

async function tweetUpdates(difference, total) {
	let formattedDifference = (difference<0?"":"+") + difference;
	let term = "case" + (Math.abs(difference)>1?"s":"")

	let photo, buffer;
	try {
		photo = await unsplash.client.photos.getRandomPhoto({ query: "owl" }).then(unsplash.toJson);
		buffer = await imageToBase64(photo.urls.small);
	} catch (err) {
		Colors.log(err, "red");
		return
	}

	try {
		twitter.post('media/upload', { media_data: buffer }, function (err, data, response) {
			var mediaIdStr = data.media_id_string
			
			var params = { status: `${formattedDifference} ${term}. ${total} total cases. Stay safe!`, media_ids: [mediaIdStr] }

			twitter.post('statuses/update', params);
		});
	} catch (err) {
		Colors.log(err, "red");
	}
}

module.exports = OwlTrack;