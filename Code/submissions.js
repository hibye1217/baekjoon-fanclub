const problems = [
	{ "id": 22343, "index": "A", "title": "괄호의 값 비교" },
	{ "id": 14622, "index": "B", "title": "소수 게임" },
	{ "id": 21942, "index": "C", "title": "부품 대여장" },
	{ "id": 19236, "index": "D", "title": "청소년 상어" },
	{ "id": 2573, "index": "E", "title": "빙산" },
	{ "id": 16722, "index": "F", "title": "결! 합!" },
	{ "id": 17085, "index": "G", "title": "십자가 2개 놓기" },
	{ "id": 27942, "index": "H", "title": ":danceplant:" },
	{ "id": 21772, "index": "I", "title": "가희의 고구마 먹방" },
	{ "id": 19238, "index": "J", "title": "스타트 택시" },
	{ "id": 14499, "index": "K", "title": "주사위 굴리기" }
];
let map = Array();
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