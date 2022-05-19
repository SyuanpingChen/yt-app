import axios from "axios";
const KEY = "AIzaSyBhssU1jJSWA2ax6frTrG0EUv2lesxwAN4";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: KEY,
	},
});
