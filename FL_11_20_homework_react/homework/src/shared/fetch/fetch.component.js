async function FetchJSON(url) {
	try {
		const request = await fetch(url);
		const text = await request.json();
		console.log(text);
		return text;
		for (let key in text) {
			console.log(key);
			console.log(key.value);
		}
		// for (let i = 0; i < text.length; i++) {
		// 	let thisObject = text[i];
		// 	for (let key in thisObject) {
		// 		console.log(key);
		// 	}
		// }
	}
	catch (err) {
		console.log('Failed on', err);
	}
}
FetchJSON('http://localhost:1337/emoji-shop');

export default FetchJSON;