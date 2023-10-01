const problems = [
	{ "id": 25828, "index": "A", "title": "Corona Virus Testing" },
	{ "id": 2606, "index": "B", "title": "바이러스" },
	{ "id": 9241, "index": "C", "title": "바이러스 복제" },
	{ "id": 18882, "index": "D", "title": "Cowntact Tracing" },
	{ "id": 18877, "index": "E", "title": "Social Distancing" },
	{ "id": 20647, "index": "F", "title": "Cowntagion" },
	{ "id": 7575, "index": "G", "title": "바이러스" },
	{ "id": 25616, "index": "H", "title": "사회적 거리두기" },
	{ "id": 20672, "index": "I", "title": "대세는 바이러스야" }
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