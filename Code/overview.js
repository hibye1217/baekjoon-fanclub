const table = document.getElementsByTagName('table')[0].children[1].children

const cornerCase = "2023학년도 대학수학능력평가 파싱영역 (짝수형)";

let result = ""; let order = 16;
for (let i = table.length-1; i >= 1; i--){
	const tr = table[i].children;

	const link = tr[0].children[0].href; const id = parseInt( link.substring( link.lastIndexOf('/')+1 ) );
	order += 1;
	const title = tr[0].innerText;
	const startTime = parseInt(tr[1].children[0].dataset.timestamp);
	const endTime = parseInt(tr[1].children[0].dataset.timestamp);

	if (title == cornerCase){ order -= 1; }

	result += "{" + "\n";
	result += "\t" + "\"id\": " + id + ", \"order\": " + order + ", \"rated\": " + (title != cornerCase) + ",\n";
	result += "\t" + "\"title\": \"" + title + "\", \"creator\": \"Unknown\",\n";
	result += "\t" + "\"startTime\": " + startTime + ", \"endTime\": " + endTime + ",\n";
	result += "\t" + "\"problems\": [],\n";
	result += "\t" + "\"submissions\": []\n";
	result += "}," + "\n";
}
console.log(result)