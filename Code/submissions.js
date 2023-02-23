const problems = [
	{ "id": 11504, "index": "A", "title": "돌려 돌려 돌림판!" },
	{ "id": 2949, "index": "B", "title": "45도" },
	{ "id": 11811, "index": "C", "title": "데스스타" },
	{ "id": 16924, "index": "D", "title": "십자가 찾기" },
	{ "id": 2780, "index": "E", "title": "비밀번호" },
	{ "id": 13140, "index": "F", "title": "Hello World!" },
	{ "id": 17232, "index": "G", "title": "생명 게임" },
	{ "id": 13018, "index": "H", "title": "특이한 수열" },
	{ "id": 17454, "index": "I", "title": "갓" },
	{ "id": 11900, "index": "J", "title": "차이 그래프" },
	{ "id": 12287, "index": "K", "title": "해밀턴 경로" },
	{ "id": 16122, "index": "L", "title": "Unary" },
	{ "id": 5000, "index": "M", "title": "빵 정렬" },
	{ "id": 2486, "index": "N", "title": "그레이 코드" },
	{ "id": 16126, "index": "O", "title": "동아리방 확장" }
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