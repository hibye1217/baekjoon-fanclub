const problems = [
{ "id": 21623, "index": "A", "title": "Game" },
{ "id": 5946, "index": "B", "title": "The Trough Game" },
{ "id": 31531, "index": "C", "title": "공들의 리듬게임" },
{ "id": 33517, "index": "D", "title": "징검다리 게임" },
{ "id": 34820, "index": "E", "title": "똥 피하기 게임" },
{ "id": 26010, "index": "F", "title": "돈 피하지 않기 게임" },
{ "id": 26871, "index": "G", "title": "IQ Game" },
{ "id": 34343, "index": "H", "title": "카드 게임" },
{ "id": 18942, "index": "I", "title": "고인물의 새로운 리듬게임" },
{ "id": 25351, "index": "J", "title": "중간 구간 게임" }
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