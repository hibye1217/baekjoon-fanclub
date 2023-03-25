const problems = [
	{ "id": 24912, "index": "A", "title": "카드 색칠" },
	{ "id": 24913, "index": "B", "title": "개표" },
	{ "id": 26607, "index": "C", "title": "시로코와 은행털기" },
	{ "id": 24025, "index": "D", "title": "돌의 정령 줄세우기" },
	{ "id": 24914, "index": "E", "title": "Split the SSHS" },
	{ "id": 26615, "index": "F", "title": "다오의 행사 계획하기" },
	{ "id": 20560, "index": "G", "title": "맛집 탐방" },
	{ "id": 24026, "index": "H", "title": "기차 여행" },
	{ "id": 26610, "index": "I", "title": "돌게임과 쿼리" }
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