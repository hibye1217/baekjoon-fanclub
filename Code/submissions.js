const problems = [
	{ "id": 2774, "index": "A", "title": "아름다운 수" },
	{ "id": 24524, "index": "B", "title": "아름다운 문자열" },
	{ "id": 14293, "index": "C", "title": "Beautiful Numbers (Large)" },
	{ "id": 2829, "index": "D", "title": "아름다운 행렬" },
	{ "id": 2871, "index": "E", "title": "아름다운 단어" },
	{ "id": 14044, "index": "F", "title": "Phonomenal Reviews" },
	{ "id": 19609, "index": "G", "title": "Swapping Seats" },
	{ "id": 10548, "index": "H", "title": "BOB" },
	{ "id": 8212, "index": "I", "title": "Temperature" },
	{ "id": 11777, "index": "J", "title": "남욱이의 썩은 계란판" },
	{ "id": 14695, "index": "K", "title": "Shifty Grid" }
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