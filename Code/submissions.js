const problems = [
	{ "id": 13322, "index": "A", "title": "접두사 배열" },
	{ "id": 17358, "index": "B", "title": "복불복으로 지구 멸망" },
	{ "id": 17296, "index": "C", "title": "But can you do it in 0.5x A presses?" },
	{ "id": 10252, "index": "D", "title": "그리드 그래프" },
	{ "id": 1117, "index": "E", "title": "색칠 1" },
	{ "id": 15980, "index": "F", "title": "명상 방해꾼" },
	{ "id": 9061, "index": "G", "title": "두 직사각형" },
	{ "id": 1510, "index": "H", "title": "이등변 삼각형" },
	{ "id": 10072, "index": "I", "title": "곤돌라 - 곤돌라 수열 확인" },
	{ "id": 25087, "index": "J", "title": "Hamiltonian Tour" },
	{ "id": 1882, "index": "K", "title": "분수 찾기" },
	{ "id": 25026, "index": "L", "title": "구간들" },
	{ "id": 18289, "index": "M", "title": "팀 연습 더" },
	{ "id": 15364, "index": "N", "title": "Krov" },
	{ "id": 1538, "index": "O", "title": "공 칠하기" },
	{ "id": 23173, "index": "P", "title": "Flowerbed Redecoration" }
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