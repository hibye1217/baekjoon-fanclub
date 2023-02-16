const problems = [
	{ "id": 14564, "index": "1", "title": "두부 게임 (Tofu Game)" },
	{ "id": 23568, "index": "2", "title": "Find the House" },
	{ "id": 24913, "index": "3", "title": "개표" },
	{ "id": 23567, "index": "4", "title": "Double Rainbow" },
	{ "id": 24025, "index": "5", "title": "돌의 정령 줄세우기" },
	{ "id": 23088, "index": "6", "title": "Aging" },
	{ "id": 15571, "index": "7", "title": "블록 3" },
	{ "id": 15678, "index": "8", "title": "연세워터파크" },
	{ "id": 20161, "index": "9", "title": "왜 동전은 하나씩만 뒤집는 거야" },
	{ "id": 13982, "index": "10", "title": "Shopping" },
	{ "id": 24915, "index": "11", "title": "센터가 돋보여야 해" },
	{ "id": 20556, "index": "12", "title": "둥둥섬 다리 재정비하기" },
	{ "id": 19217, "index": "13", "title": "Jitterbug" }
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