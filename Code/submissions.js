const problems = [
	{ "id": 21968, "index": "A", "title": "선린의 터를" },
	{ "id": 5389, "index": "B", "title": "제곱근 작도" },
	{ "id": 1089, "index": "C", "title": "스타트링크 타워" },
	{ "id": 1601, "index": "D", "title": "바이너리 파워 비숍" },
	{ "id": 2005, "index": "E", "title": "사발" },
	{ "id": 1814, "index": "F", "title": "지붕 색칠하기" },
	{ "id": 13407, "index": "G", "title": "Skinny Polygon" },
	{ "id": 15773, "index": "H", "title": "Touch The Sky" }
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

	result += "{ " + "\"handle\": \"" + handle + "\", \"id\": " + id + ", " + "\"problem\": \"" + problem + "\", \"verdict\": \"" + verdict + "\", \"time\": " + time + " },\n";
}
console.log(result);