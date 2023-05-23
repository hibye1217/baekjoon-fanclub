const problems = [
	{ "id": 28038, "index": "A", "title": "2차원 좌표변환" },
	{ "id": 1262, "index": "B", "title": "알파벳 다이아몬드" },
	{ "id": 27943, "index": "C", "title": "가지 사진 찾기" },
	{ "id": 28016, "index": "D", "title": "경품 추첨" },
	{ "id": 4868, "index": "E", "title": "Mix and Build" },
	{ "id": 26525, "index": "F", "title": "빙고" },
	{ "id": 3678, "index": "G", "title": "카탄의 개척자" },
	{ "id": 12985, "index": "H", "title": "비밀 회선" },
	{ "id": 10523, "index": "I", "title": "직선 찾기" },
	{ "id": 10729, "index": "J", "title": "업적의 노예 1" },
	{ "id": 24271, "index": "K", "title": "xor²" },
	{ "id": 28032, "index": "L", "title": "Field Day" },
	{ "id": 23046, "index": "M", "title": "큰 수 뒤집기" },
	{ "id": 16749, "index": "N", "title": "Sixth Sense" }
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