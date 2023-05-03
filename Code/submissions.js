const problems = [
	{ "id": 18742, "index": "A", "title": "Avg" },
	{ "id": 20772, "index": "B", "title": "Scheduler" },
	{ "id": 25492, "index": "C", "title": "전깃줄 연결" },
	{ "id": 21959, "index": "D", "title": "Subway" },
	{ "id": 16190, "index": "E", "title": "Rising Sun" },
	{ "id": 27480, "index": "F", "title": "Even Harder" },
	{ "id": 13873, "index": "G", "title": "Hotel Rewards" },
	{ "id": 9912, "index": "H", "title": "Lexical" },
	{ "id": 25559, "index": "I", "title": "패스" },
	{ "id": 23767, "index": "J", "title": "Access Denied" },
	{ "id": 25999, "index": "K", "title": "House Numbering" },
	{ "id": 18735, "index": "L", "title": "Balls" }
];
let map = Array(30000);
problems.forEach(p => { map[p.id] = p.index; });

const table = document.getElementById('status-table').children[1].children;

let result = "";
for (let i = table.length-1; i >= 0; i--){
	const tr = table[i].children;

	const handle = tr[1].innerText;
	const id = tr[0].innerText;
	const index = tr[2].children[1].dataset.originalId; const problem = map[index];
	const verdict = tr[3].children[0].dataset.color.toUpperCase();
	const time = tr[8].children[0].dataset.timestamp;

	if (problem === undefined){ console.error("Unknown problem"); }

	result += "{ " + "\"handle\": \"" + handle + "\", \"id\": " + id + ", " + "\"problem\": \"" + problem + "\", \"verdict\": \"" + verdict + "\", \"time\": " + time + " },\n";
}
console.log(result);