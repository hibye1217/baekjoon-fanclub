const problems = [
	{ "id": 27920, "index": "A", "title": "카드 뒤집기" },
	{ "id": 21605, "index": "B", "title": "아름다운 수열" },
	{ "id": 23048, "index": "C", "title": "자연수 색칠하기" },
	{ "id": 30297, "index": "D", "title": "Irreducible Permutation" },
	{ "id": 17954, "index": "E", "title": "투튜브" },
	{ "id": 27489, "index": "F", "title": "Matching Numbers" },
	{ "id": 23116, "index": "G", "title": "AND" },
	{ "id": 10923, "index": "H", "title": "정렬하기" },
	{ "id": 17384, "index": "I", "title": "대진표" },
	{ "id": 30920, "index": "J", "title": "수열 선물받기" },
	{ "id": 17512, "index": "K", "title": "Gosu 2" },
	{ "id": 16711, "index": "L", "title": "Erasing Matrix" },
	{ "id": 2323, "index": "M", "title": "강강술래" },
	{ "id": 19540, "index": "N", "title": "인버스 ㄷㄷㄷㅈ" }
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