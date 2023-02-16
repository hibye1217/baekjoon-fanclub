const problems = [
	{ "id": 20977, "index": "A", "title": "JOI ソート (JOI Sort)" },
	{ "id": 22578, "index": "B", "title": "CatChecker" },
	{ "id": 24114, "index": "C", "title": "DNA の合成 (DNA synthesizer)" },
	{ "id": 22422, "index": "D", "title": "Airport Codes" },
	{ "id": 18421, "index": "E", "title": "じゃんけん式 (Rock-Scissors-Paper Expression)" },
	{ "id": 22449, "index": "F", "title": "Almost Same Substring" },
	{ "id": 17777, "index": "G", "title": "Copy and Paste" },
	{ "id": 22430, "index": "H", "title": "Broken Cipher Generator" },
	{ "id": 22764, "index": "I", "title": "Keitai Message" },
	{ "id": 22403, "index": "J", "title": "阿吽の呼吸" },
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