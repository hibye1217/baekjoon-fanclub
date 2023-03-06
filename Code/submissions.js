const problems = [
	{ "id": 27487, "index": "A", "title": "One and Two" },
	{ "id": 16086, "index": "B", "title": "Дайн" },
	{ "id": 3550, "index": "C", "title": "Auxiliary Question of the Universe" },
	{ "id": 1034, "index": "D", "title": "램프" },
	{ "id": 23545, "index": "E", "title": "Liquid Cats" },
	{ "id": 26656, "index": "F", "title": "점프킹" },
	{ "id": 23407, "index": "G", "title": "Board Trick" }
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