const problems = [
	{ "id": 28063, "index": "A", "title": "동전 복사" },
	{ "id": 1455, "index": "B", "title": "뒤집기 II" },
	{ "id": 27972, "index": "C", "title": "악보는 거들 뿐" },
	{ "id": 10597, "index": "D", "title": "순열장난" },
	{ "id": 12945, "index": "E", "title": "재미있는 박스 정리" },
	{ "id": 20555, "index": "F", "title": "타자연습" },
	{ "id": 22046, "index": "G", "title": "Mutating DNA" },
	{ "id": 14847, "index": "H", "title": "수열과 변환" },
	{ "id": 2454, "index": "I", "title": "트리 분할" },
	{ "id": 1642, "index": "J", "title": "딱따구리" },
	{ "id": 5471, "index": "K", "title": "Pyramid Base" }
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