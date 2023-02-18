const problems = [
	{ "id": 26171, "index": "A", "title": "An Interactive Problem" },
	{ "id": 24239, "index": "B", "title": "Coins" },
	{ "id": 19554, "index": "C", "title": "Guess the number" },
	{ "id": 27417, "index": "D", "title": "Interactive Number Guessing" },
	{ "id": 25907, "index": "E", "title": "양과 늑대" },
	{ "id": 21336, "index": "F", "title": "Cheating" },
	{ "id": 22958, "index": "G", "title": "안산 탐지기" },
	{ "id": 20234, "index": "H", "title": "Corrupted Sort" },
	{ "id": 25363, "index": "I", "title": "Interactive Treasure Hunt" },
	{ "id": 3503, "index": "J", "title": "Interactive Permutation Guessing" },
	{ "id": 23072, "index": "K", "title": "Secret Sequence" }
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