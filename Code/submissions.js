const problems = [
	{ "id": 8184, "index": "A", "title": "Guilds" },
	{ "id": 8142, "index": "B", "title": "Ridges and Valleys" },
	{ "id": 11984, "index": "C", "title": "Lights Out (Gold)" },
	{ "id": 1905, "index": "D", "title": "상자 쌓기" },
	{ "id": 8198, "index": "E", "title": "Frog" },
	{ "id": 8230, "index": "F", "title": "Squarks" },
	{ "id": 8239, "index": "G", "title": "Taxis" },
	{ "id": 10004, "index": "H", "title": "Bytecomputer" },
	{ "id": 8243, "index": "I", "title": "Triumphal arch" },
	{ "id": 8192, "index": "J", "title": "Sheep" },
	{ "id": 8193, "index": "K", "title": "킹세종" },
	{ "id": 10007, "index": "L", "title": "레이저" }
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