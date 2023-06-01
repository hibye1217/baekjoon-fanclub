const problems = [
	{ "id": 27970, "index": "A", "title": "OX" },
	{ "id": 27945, "index": "B", "title": "슬슬 가지를 먹지 않으면 죽는다" },
	{ "id": 28076, "index": "C", "title": "멀티탭 충분하다" },
	{ "id": 28119, "index": "D", "title": "Traveling SCCC President" },
	{ "id": 28072, "index": "E", "title": "K512에서 피자 먹기" },
	{ "id": 27728, "index": "F", "title": "개구리와 쿼리" },
	{ "id": 27653, "index": "G", "title": "최소 트리 분할" },
	{ "id": 27876, "index": "H", "title": "제곱수 덱 1" },
	{ "id": 27954, "index": "I", "title": "낱말 퍼즐" }
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