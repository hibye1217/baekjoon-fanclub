const problems = [
	{ "id": 11718, "index": "A", "title": "그대로 출력하기" },
	{ "id": 11719, "index": "B", "title": "그대로 출력하기 2" },
	{ "id": 24499, "index": "C", "title": "blobyum" },
	{ "id": 24500, "index": "D", "title": "blobblush" },
	{ "id": 19303, "index": "E", "title": "Aftermath" },
	{ "id": 16891, "index": "F", "title": "탄성 충돌" },
	{ "id": 16680, "index": "G", "title": "안수빈수" },
	{ "id": 10220, "index": "H", "title": "Self Representing Seq" },
	{ "id": 13728, "index": "I", "title": "행렬식과 GCD" },
	{ "id": 13926, "index": "J", "title": "gcd(n, k) = 1" },
	{ "id": 3752, "index": "K", "title": "최대공약수 행렬식" },
	{ "id": 10350, "index": "L", "title": "은행" },
	{ "id": 8878, "index": "M", "title": "Hey, Better Bettor" }
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