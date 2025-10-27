const problems = [
{ "id": 30866, "index": "A", "title": "NOT a SAT problem" },
{ "id": 32944, "index": "B", "title": "잘못된 LIS 알고리즘" },
{ "id": 33803, "index": "C", "title": "Lost Civilization" },
{ "id": 28240, "index": "D", "title": "S리그" },
{ "id": 33602, "index": "E", "title": "Mascot Naming" },
{ "id": 26880, "index": "F", "title": "Triangeltal" },
{ "id": 32105, "index": "G", "title": "James Ferraro - Live at Primavera Sound 2012" },
{ "id": 31570, "index": "H", "title": "섬" },
{ "id": 33371, "index": "I", "title": "Bit Component" },
{ "id": 33589, "index": "J", "title": "Funny or Scary?" },
{ "id": 34211, "index": "K", "title": "Duplicated Binary Strings" }
];
let map = Array();
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