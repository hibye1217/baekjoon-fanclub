const problems = [
	{ "id": 2521, "index": "A", "title": "팬케이크 사랑 2" },
	{ "id": 2520, "index": "B", "title": "팬케이크 사랑" },
	{ "id": 2715, "index": "C", "title": "상범 마법 팬케이크 하우스" },
	{ "id": 2759, "index": "D", "title": "팬케이크 뒤집기" },
	{ "id": 24728, "index": "E", "title": "팬케이크맛 쿠키" },
	{ "id": 12744, "index": "F", "title": "팬케이크 쌓기" },
	{ "id": 27474, "index": "G", "title": "팬케이크 탑" }
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