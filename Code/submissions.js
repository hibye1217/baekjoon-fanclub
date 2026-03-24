const problems = [
 { "id": 12243, "index": "A", "title": "Part Elf (Large)" },
{ "id": 32657, "index": "B", "title": "게임 오브 데쓰 (Hard)" },
{ "id": 20128, "index": "C", "title": "Parity Constraint Shortest Path" },
{ "id": 34811, "index": "D", "title": "붉은색 푸른색 그 사이 $i$초 그 짧은 시간" },
{ "id": 35060, "index": "E", "title": "겨울 축제 2" },
{ "id": 21993, "index": "F", "title": "Is It Rated?" },
{ "id": 15994, "index": "G", "title": "엘리베이터 2" },
{ "id": 35061, "index": "H", "title": "에린의 룬 경로" },
{ "id": 17899, "index": "I", "title": "Symmetric Polynomials" },
{ "id": 33359, "index": "J", "title": "Many Many Cycles" },
{ "id": 18952, "index": "K", "title": "Algebra on Segment" },
{ "id": 31354, "index": "L", "title": "Tri-color Spanning Tree" },
{ "id": 21106, "index": "M", "title": "One More Problem About DFT" },
{ "id": 16646, "index": "N", "title": "Game with Polynomials" }
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