const problems = [
	{ "id": 16485, "index": "A", "title": "작도하자! - ②" },
	{ "id": 16478, "index": "B", "title": "원의 분할" },
	{ "id": 22290, "index": "C", "title": "lattice" },
	{ "id": 20206, "index": "D", "title": "푸앙이가 길을 건너간 이유" },
	{ "id": 1711, "index": "E", "title": "직각삼각형" },
	{ "id": 9553, "index": "F", "title": "양궁" },
	{ "id": 2175, "index": "G", "title": "땅 자르기" },
	{ "id": 16115, "index": "H", "title": "팬이에요" },
	{ "id": 20032, "index": "I", "title": "Sewing Graph" },
	{ "id": 1688, "index": "J", "title": "지민이의 테러" },
	{ "id": 1858, "index": "K", "title": "기울기가 가장 큰 두 점" },
	{ "id": 22975, "index": "L", "title": "도시 계획" },
	{ "id": 9374, "index": "M", "title": "감시 카메라" }
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