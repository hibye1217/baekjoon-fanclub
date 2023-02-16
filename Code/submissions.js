const problems = [
	{ "id": 20170, "index": "A", "title": "Commemorative Dice" },
	{ "id": 12723, "index": "B", "title": "Minimum Scalar Product (Small)" },
	{ "id": 3474, "index": "C", "title": "교수가 된 현우" },
	{ "id": 14011, "index": "D", "title": "Small PhD Restaurant" },
	{ "id": 3981, "index": "E", "title": "큐브러버" },
	{ "id": 17272, "index": "F", "title": "리그 오브 레전설 (Large)" },
	{ "id": 14860, "index": "G", "title": "GCD 곱" },
	{ "id": 21000, "index": "H", "title": "Archer Vlad" },
	{ "id": 15715, "index": "I", "title": "배열과 gcd" },
	{ "id": 3606, "index": "J", "title": "Cellular Automaton" },
	{ "id": 12702, "index": "K", "title": "Endless Knight (Large)" }
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

	result += "{ " + "\"handle\": \"" + handle + "\", \"id\": " + id + ", " + "\"problem\": \"" + problem + "\", \"verdict\": \"" + verdict + "\", \"time\": " + time + " },\n";
}
console.log(result);