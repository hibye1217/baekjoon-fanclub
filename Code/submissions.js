const problems = [
	{ "id": 5163, "index": "A", "title": "Isn’t It Funny How a Bear Likes Honey?" },
	{ "id": 10025, "index": "B", "title": "게으른 백곰" },
	{ "id": 24771, "index": "C", "title": "Un-bear-able Zoo" },
	{ "id": 25918, "index": "D", "title": "북극곰은 괄호를 찢어" },
	{ "id": 12914, "index": "E", "title": "곰을 위한 레스토랑" },
	{ "id": 25200, "index": "F", "title": "곰곰이와 자판기" },
	{ "id": 27732, "index": "G", "title": "숲 속의 과학자" }
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