const problems = [
	{ "id": 1216, "index": "A", "title": "충무공 이순신" },
	{ "id": 1313, "index": "B", "title": "합성소수" },
	{ "id": 1883, "index": "C", "title": "1&&3" },
	{ "id": 1962, "index": "D", "title": "한글 ㄴㄴ 수" },
	{ "id": 2009, "index": "E", "title": "Minecraft" },
	{ "id": 2048, "index": "F", "title": "Hello, 2048!" },
	{ "id": 2356, "index": "G", "title": "제곱 ㄷㄷ 수" },
	{ "id": 2390, "index": "H", "title": "⎐" },
	{ "id": 2746, "index": "I", "title": "좋은 배열 만들기" },
	{ "id": 10947, "index": "J", "title": "로또" }
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