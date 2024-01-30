const User = require('./models/User');
const db = require('./db');

main();

async function main() {
	db.connect();
	// await addTurtles();
	await printAllUsers();
	// await addAviBiter();
	// await deleteAllUsers();
	db.disconnect();
}

async function printAllUsers() {
	console.log(await User.find({}));
}

async function addAviBiter() {
	const user = await User.create({ name: "avi biter", age: 18 });
	console.log(user.name, 'was added');
}

async function addTurtles() {
	const turtles = [
		{ name: "rafael", age: 2 },
		{ name: "donatelo", age: 2 },
		{ name: "mikelangelo", age: 2 },
		{ name: "leonardo", age: 2 },
	];
	await User.insertMany(turtles);
	console.log('the turtles were added');
}

async function deleteAllUsers() {
	await User.deleteMany({});
	console.log('users collection is clean now');
}