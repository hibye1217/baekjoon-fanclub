const problems = [
	{ "id": 20756, "index": "A", "title": "Fraction" },
	{ "id": 25499, "index": "B", "title": "Tipover Transform" },
	{ "id": 18082, "index": "C", "title": "Canvas Line" },
	{ "id": 21930, "index": "D", "title": "Jewelry Size" },
	{ "id": 17786, "index": "E", "title": "Efficient Exchange" },
	{ "id": 25835, "index": "F", "title": "Lots of Towers of Hanoi" },
	{ "id": 20662, "index": "G", "title": "Hop" },
	{ "id": 20688, "index": "H", "title": "Cul-De-Sac Parades" },
	{ "id": 17562, "index": "I", "title": "Mason’s Mark" },
	{ "id": 13932, "index": "J", "title": "Exam Redistribution" },
	{ "id": 18704, "index": "K", "title": "Awesome Shawarma" },
	{ "id": 9919, "index": "L", "title": "Route" }
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