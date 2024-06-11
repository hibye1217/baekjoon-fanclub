const problems = [
	{ "id": 1876, "index": "A", "title": "튕기는 볼링공" },
	{ "id": 19535, "index": "B", "title": "ㄷㄷㄷㅈ" },
	{ "id": 26156, "index": "C", "title": "나락도 락이다" },
	{ "id": 25498, "index": "D", "title": "핸들 뭘로 하지" },
	{ "id": 16933, "index": "E", "title": "벽 부수고 이동하기 3" },
	{ "id": 24505, "index": "F", "title": "blobhyperthink" },
	{ "id": 18863, "index": "G", "title": "풀 한 포기 친구 얼굴" },
	{ "id": 24124, "index": "H", "title": "高速道路 (Highway)" },
];
let map = Array(30000);
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