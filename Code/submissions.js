const problems = [
	{ "id": 24183, "index": "A", "title": "Affischutskicket" },
	{ "id": 6508, "index": "B", "title": "A Game with Marbles" },
	{ "id": 2183, "index": "C", "title": "테니스 시합" },
	{ "id": 3432, "index": "D", "title": "Game" },
	{ "id": 24571, "index": "E", "title": "Good Groups" },
	{ "id": 10096, "index": "F", "title": "세 친구" },
	{ "id": 13994, "index": "G", "title": "Foreign Postcards" },
	{ "id": 11695, "index": "H", "title": "표 게임" },
	{ "id": 16831, "index": "I", "title": "Nim without Zero" },
	{ "id": 15850, "index": "J", "title": "Random Number Generator" },
	{ "id": 23047, "index": "K", "title": "여우 국수" },
	{ "id": 21993, "index": "L", "title": "Is It Rated?" }
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