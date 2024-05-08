const problems = [
	{ "id": 1247, "index": "A", "title": "부호" },
	{ "id": 17127, "index": "B", "title": "벚꽃이 정보섬에 피어난 이유" },
	{ "id": 14632, "index": "C", "title": "고급 작품" },
	{ "id": 1569, "index": "D", "title": "정사각형으로 가리기" },
	{ "id": 1186, "index": "E", "title": "직사각형 색칠하기" },
	{ "id": 1272, "index": "F", "title": "특별 노드" },
	{ "id": 1506, "index": "G", "title": "경찰서" },
	{ "id": 2416, "index": "H", "title": "문" },
	{ "id": 2032, "index": "I", "title": "피라미드" },
	{ "id": 11797, "index": "J", "title": "수행평가 2" }
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
