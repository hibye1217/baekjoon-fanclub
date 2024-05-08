async function main(){ return;
	const result = await callAPI(0, "https://hibye1217.github.io/baekjoon-fanclub/Data/result.json");
	
	const id = parseInt(getValueFromURL('id'));
	let set = undefined; for (let i = 0; i < result.length; i++){
		if (result[i].incomplete){ break; }
		if (result[i].id == id){ set = result[i]; }
	}
	if (set == undefined){ alert("IndexError: 입력한 id의 셋이 존재하지 않습니다."); return; }
}