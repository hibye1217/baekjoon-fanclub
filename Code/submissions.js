const problems = [
 { "id": 23364, "index": "A", "title": "Almost Always" },
{ "id": 10517, "index": "B", "title": "Radar Coverage" },
{ "id": 8483, "index": "C", "title": "Earthquake" },
{ "id": 10891, "index": "D", "title": "Cactus? Not cactus?" },
{ "id": 24598, "index": "E", "title": "Diagonals" },
{ "id": 25012, "index": "F", "title": "마법의 다이얼" },
{ "id": 17421, "index": "G", "title": "빗물이 넘쳐흘러" },
{ "id": 13974, "index": "H", "title": "파일 합치기 2" },
{ "id": 16994, "index": "I", "title": "로프와 쿼리" },
{ "id": 17459, "index": "J", "title": "Fruit Tree" },
{ "id": 7777, "index": "K", "title": "병원" },
{ "id": 14960, "index": "L", "title": "Strongly Matchable" },
{ "id": 3121, "index": "M", "title": "빨간점, 파란점" },
{ "id": 3763, "index": "N", "title": "스도쿠" },
{ "id": 17636, "index": "O", "title": "가로등" },
{ "id": 18945, "index": "P", "title": "조작된 ㄱ 폭탄 게임" },
{ "id": 18163, "index": "Q", "title": "Binary Matrix" }
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