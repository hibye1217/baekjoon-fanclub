const problems = [
	{ "id": 9762, "index": "A", "title": "โรงงานลูกกวาด (Candy Factory)" },
	{ "id": 10459, "index": "B", "title": "Compressed Words?" },
	{ "id": 21198, "index": "C", "title": "Arithmetic Decoding" },
	{ "id": 5390, "index": "D", "title": "Gene Shuffle" },
	{ "id": 5092, "index": "E", "title": "Air Old Zeeland" },
	{ "id": 5106, "index": "F", "title": "Target" },
	{ "id": 4389, "index": "G", "title": "Demerit Points" },
	{ "id": 23301, "index": "H", "title": "스터디 시간 정하기 2" },
	{ "id": 12809, "index": "I", "title": "Train in a Tunnel" },
	{ "id": 11202, "index": "J", "title": "Flag Quiz" },
	{ "id": 7348, "index": "K", "title": "테이블 옮기기" },
	{ "id": 9491, "index": "L", "title": "Politics" },
	{ "id": 17901, "index": "M", "title": "Awkward Party" },
	{ "id": 9436, "index": "N", "title": "Round Robin" },
	{ "id": 15030, "index": "O", "title": "Deranging Hat" },
	{ "id": 27080, "index": "P", "title": "Cow Brainiacs" },
	{ "id": 21325, "index": "Q", "title": "Free food" },
	{ "id": 7967, "index": "R", "title": "Balance" },
	{ "id": 25989, "index": "S", "title": "Jabbing Jets" },
	{ "id": 4227, "index": "T", "title": "Smeech" },
	{ "id": 6716, "index": "U", "title": "Collecting Beepers" },
	{ "id": 7669, "index": "V", "title": "Go" },
	{ "id": 5992, "index": "W", "title": "The Leisurely Stroll" },
	{ "id": 6676, "index": "X", "title": "Inglish-Number Translator" },
	{ "id": 8184, "index": "Y", "title": "Guilds" },
	{ "id": 11805, "index": "Z", "title": "Special Christmas Tree" }
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