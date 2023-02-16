const problems = [
	{ "id": 13189, "index": "A", "title": "Trick" },
	{ "id": 21087, "index": "B", "title": "Thanks to MikeMirzayanov" },
	{ "id": 14399, "index": "C", "title": "2연산" },
	{ "id": 23363, "index": "D", "title": "HQ0-9+-INCOMPUTABLE?!" },
	{ "id": 1635, "index": "E", "title": "1 또는 -1" },
	{ "id": 24844, "index": "F", "title": "Guess the Array" },
	{ "id": 25237, "index": "G", "title": "Word Ladder" },
	{ "id": 24259, "index": "H", "title": "Monopoly" }
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