const problems = [
	{ "id": 9913, "index": "A", "title": "Max" },
	{ "id": 19694, "index": "B", "title": "Sorting" },
	{ "id": 9844, "index": "C", "title": "Gecko" },
	{ "id": 9822, "index": "D", "title": "Global Warming" },
	{ "id": 9885, "index": "E", "title": "Claws" },
	{ "id": 9826, "index": "F", "title": "Pancake" },
	{ "id": 9898, "index": "G", "title": "Domino" },
	{ "id": 28495, "index": "H", "title": "Topical" },
	{ "id": 19669, "index": "I", "title": "Firefighting" },
	{ "id": 19672, "index": "J", "title": "Feast" }
];
let map = Array(30000);
problems.forEach(p => { map[p.id] = p.index; });

const table = document.getElementById('status-table').children[1].children;

let result = "";
for (let i = table.length-1; i >= 0; i--){
	const tr = table[i].children;

	const handle = tr[1].innerText;
	const id = tr[0].innerText;
	const index = parseInt(tr[2].children[1].innerText); const problem = map[index];
	const verdict = tr[3].children[0].dataset.color.toUpperCase();
	const time = tr[8].children[0].dataset.timestamp;

	if (problem === undefined){ console.error("Unknown problem"); }

	result += "{ " + "\"handle\": \"" + handle + "\", \"id\": " + id + ", " + "\"problem\": \"" + problem + "\", \"verdict\": \"" + verdict + "\", \"time\": " + time + " },\n";
}
console.log(result);
