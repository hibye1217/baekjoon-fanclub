const problems = [
{ "id": 29263, "index": "A", "title": "Штурм" },
{ "id": 29292, "index": "B", "title": "X частей" },
{ "id": 30077, "index": "C", "title": "Dviračių lenktynės" },
{ "id": 12803, "index": "D", "title": "Peter and the Textbook" },
{ "id": 25089, "index": "E", "title": "3D Printing" },
{ "id": 3218, "index": "F", "title": "spam" },
{ "id": 25596, "index": "G", "title": "마트료시카 박스 II" },
{ "id": 25598, "index": "H", "title": "Alive or Dead?" },
{ "id": 31092, "index": "I", "title": "스티커 재배치" },
{ "id": 27991, "index": "J", "title": "고장난 프린터" },
{ "id": 32181, "index": "K", "title": "트트리리와 쿼리" },
{ "id": 31988, "index": "L", "title": "문제 제목 뭐라 짓지" },
{ "id": 30243, "index": "M", "title": "🧩 N-Queen (Hard)" },
{ "id": 33843, "index": "N", "title": "∀nnihilation" },
{ "id": 27949, "index": "O", "title": "가지 볶음" }
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