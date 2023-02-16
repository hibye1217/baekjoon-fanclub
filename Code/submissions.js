const problems = [
	{ "id": 25044, "index": "A", "title": "에어컨" },
	{ "id": 21980, "index": "B", "title": "비슷한 번호판" },
	{ "id": 2641, "index": "C", "title": "다각형그리기" },
	{ "id": 20923, "index": "D", "title": "숫자 할리갈리 게임" },
	{ "id": 2651, "index": "E", "title": "자동차경주대회" },
	{ "id": 10836, "index": "F", "title": "여왕벌" },
	{ "id": 22343, "index": "G", "title": "괄호의 값 비교" },
	{ "id": 2132, "index": "H", "title": "나무 위의 벌레" },
	{ "id": 2505, "index": "I", "title": "두 번 뒤집기" },
	{ "id": 12920, "index": "J", "title": "평범한 배낭 2" },
	{ "id": 20560, "index": "K", "title": "맛집 탐방" },
	{ "id": 13331, "index": "L", "title": "Planar Drawing" }
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