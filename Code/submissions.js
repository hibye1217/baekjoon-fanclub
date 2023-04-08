const problems = [
	{ "id": 20944, "index": "A", "title": "팰린드롬 척화비" },
	{ "id": 16341, "index": "B", "title": "Horsemeet" },
	{ "id": 14281, "index": "C", "title": "볼록 수열" },
	{ "id": 1808, "index": "D", "title": "숌작업" },
	{ "id": 4237, "index": "E", "title": "비 단조성" },
	{ "id": 18153, "index": "F", "title": "Coloring Contention" },
	{ "id": 3870, "index": "G", "title": "Find the Multiples" },
	{ "id": 11307, "index": "H", "title": "String Game" },
	{ "id": 14368, "index": "I", "title": "Fashion Police (Large)" },
	{ "id": 10682, "index": "J", "title": "Everlasting -One-" },
	{ "id": 20234, "index": "K", "title": "Corrupted Sort" }
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