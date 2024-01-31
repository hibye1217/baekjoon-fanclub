const problems = [
	{ "id": 1167, "index": "A", "title": "트리의 지름" },
	{ "id": 28219, "index": "B", "title": "주유소" },
	{ "id": 23572, "index": "C", "title": "Logistical Warehouse 2" },
	{ "id": 20990, "index": "D", "title": "Perfect Path Patrol" },
	{ "id": 22199, "index": "E", "title": "Cat in a tree" }
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