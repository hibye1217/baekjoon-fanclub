const problems = [
 { "id": 11058, "index": "A", "title": "크리보드" },
{ "id": 16740, "index": "B", "title": "Arithmetic Progressions" },
{ "id": 26839, "index": "C", "title": "Flappy Bird" },
{ "id": 8314, "index": "D", "title": "Acyclic Decomposition" },
{ "id": 16745, "index": "E", "title": "What Goes Up Must Come Down" },
{ "id": 17166, "index": "F", "title": "Voronoi Diagram Again" },
{ "id": 27364, "index": "G", "title": "Floppy" },
{ "id": 26659, "index": "H", "title": "소떡소떡 2" },
{ "id": 27200, "index": "I", "title": "Loop around Lake" },
{ "id": 17737, "index": "J", "title": "Scarecrows" }
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