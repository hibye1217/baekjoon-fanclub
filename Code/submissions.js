const problems = [
	{ "id": 28126, "index": "A", "title": "Space-A" },
	{ "id": 28053, "index": "B", "title": "Simple Game" },
	{ "id": 22880, "index": "C", "title": "봉화대" },
	{ "id": 5463, "index": "D", "title": "건포도" },
	{ "id": 10749, "index": "E", "title": "Superbull" },
	{ "id": 18267, "index": "F", "title": "Milk Visits" },
	{ "id": 23820, "index": "G", "title": "MEX" },
	{ "id": 15708, "index": "H", "title": "미네크래프트" },
	{ "id": 2220, "index": "I", "title": "힙 정렬" },
	{ "id": 10605, "index": "J", "title": "드래곤 죽이기" },
	{ "id": 1273, "index": "K", "title": "샷" },
	{ "id": 25259, "index": "L", "title": "Art Collections" },
	{ "id": 27877, "index": "M", "title": "제곱수 덱 2" }
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