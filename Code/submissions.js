const problems = [
	{ "id": 11283, "index": "1", "title": "한글 2" },
	{ "id": 2870, "index": "2", "title": "수학숙제" },
	{ "id": 15725, "index": "3", "title": "다항함수의 미분" },
	{ "id": 17214, "index": "4", "title": "다항 함수의 적분" },
	{ "id": 1501, "index": "5", "title": "영어 읽기" },
	{ "id": 14014, "index": "6", "title": "Dudu of English" },
	{ "id": 21985, "index": "7", "title": "ASCII Automata Art" },
	{ "id": 6531, "index": "8", "title": "이런 문제는 유치원생도 해결할 수 있어" },
	{ "id": 18166, "index": "9", "title": "Evaluation" }
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