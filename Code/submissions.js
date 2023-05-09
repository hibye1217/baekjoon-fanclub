const problems = [
	{ "id": 24727, "index": "A", "title": "인지융~" },
	{ "id": 14556, "index": "B", "title": "Balance" },
	{ "id": 10564, "index": "C", "title": "팔굽혀펴기" },
	{ "id": 3366, "index": "D", "title": "수열 줄이기" },
	{ "id": 17834, "index": "E", "title": "사자와 토끼" },
	{ "id": 8196, "index": "F", "title": "The Minima Game" },
	{ "id": 19541, "index": "G", "title": "역학 조사" },
	{ "id": 25638, "index": "H", "title": "트리와 경로 개수 쿼리" },
	{ "id": 12776, "index": "I", "title": "Swap Space" },
	{ "id": 24043, "index": "J", "title": "XOR 기계" },
	{ "id": 11848, "index": "K", "title": "Schools" }
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