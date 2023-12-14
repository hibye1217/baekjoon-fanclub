const problems = [
	{ "id": 30394, "index": "A", "title": "회전하지 않는 캘리퍼스" },
	{ "id": 17093, "index": "B", "title": "Total Circle" },
	{ "id": 14842, "index": "C", "title": "재홍의 사다리" },
	{ "id": 2121, "index": "D", "title": "넷이 놀기" },
	{ "id": 3042, "index": "E", "title": "트리플렛" },
	{ "id": 14930, "index": "F", "title": "구슬 (BEAD)" },
	{ "id": 19950, "index": "G", "title": "3차원 막대기 연결하기" },
	{ "id": 22236, "index": "H", "title": "가희와 비행기" },
	{ "id": 5405, "index": "I", "title": "프랙탈 거리" },
	{ "id": 26654, "index": "J", "title": "원점" },
	{ "id": 11572, "index": "K", "title": "확률 실험" },
	{ "id": 27990, "index": "L", "title": "가지 볶음 (Easy)" },
	{ "id": 11873, "index": "M", "title": "최대 직사각형" },
	{ "id": 16885, "index": "N", "title": "벡터의 합" },
	{ "id": 30790, "index": "O", "title": "확장 공사" },
	{ "id": 24487, "index": "P", "title": "Multiple Choice Test" },
	{ "id": 3873, "index": "Q", "title": "Intersection of Two Prisms" }
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