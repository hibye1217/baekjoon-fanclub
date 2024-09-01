const problems = [
	{ "id": 32068, "index": "A", "title": "보물 찾기" },
	{ "id": 23627, "index": "B", "title": "driip" },
	{ "id": 3699, "index": "C", "title": "주차 빌딩" },
	{ "id": 9518, "index": "D", "title": "로마 카톨릭 미사" },
	{ "id": 2175, "index": "E", "title": "땅 자르기" },
	{ "id": 27534, "index": "F", "title": "좋은 문자열 만들기" },
	{ "id": 30640, "index": "G", "title": "운전 연습" },
	{ "id": 10335, "index": "H", "title": "There is No Alternative" },
	{ "id": 28863, "index": "I", "title": "Кошелёк" },
	{ "id": 12880, "index": "J", "title": "그래프 차이 최소" }
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