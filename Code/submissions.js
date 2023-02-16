const problems = [
	{ "id": 23530, "index": "A", "title": "Not A + B" },
	{ "id": 11773, "index": "B", "title": "ESEJ" },
	{ "id": 16956, "index": "C", "title": "늑대와 양" },
	{ "id": 21869, "index": "D", "title": "Maximum Bishop" },
	{ "id": 3529, "index": "E", "title": "Alien Communication Masterclass" },
	{ "id": 13312, "index": "F", "title": "아크코사인은 믿음입니다" },
	{ "id": 17546, "index": "G", "title": "Exits in Excess" },
	{ "id": 16817, "index": "H", "title": "Ninja Map" },
	{ "id": 19571, "index": "I", "title": "탐색 게임" },
	{ "id": 2222, "index": "J", "title": "아이스크림" },
	{ "id": 23060, "index": "K", "title": "백남이의 여행" },
	{ "id": 23382, "index": "L", "title": "Hamiltooonian Hike" },
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