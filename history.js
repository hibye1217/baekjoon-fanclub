async function main(){
	const result = await callAPI(0, "https://hibye1217.github.io/baekjoon-fanclub/Data/result.json");
	const len = result.length;

	let count = {};

	const table = document.getElementById('history-table').children[1];
	let now = 0;
	for (let x = 0; now < len; x++){
		if (result[now].incomplete){ break; }
		let nxt = now;
		while (nxt < len){
			if (result[nxt].order == x+1 && result[nxt].rated){ break; }
			else{ nxt += 1; }
		}
		console.log(x, now, nxt);
		if (nxt >= len){ break; }

		const title = result[now].title;
		const handle = result[nxt].creator;
		const link = result[now].links;

		const tr = document.createElement('tr');
		{
			const td = document.createElement('td');
			td.innerHTML = x;
			tr.appendChild(td);
		}
		{
			const td = document.createElement('td');
			td.innerHTML = handle;
			tr.appendChild(td);
		}
		{
			const td = document.createElement('td');
			if (count[handle] === undefined){ count[handle] = 0; }
			count[handle] += 1;
			td.innerHTML = count[handle];
			tr.appendChild(td);
		}
		{
			const td = document.createElement('td');
			if (x == 0){ td.innerHTML = "팬클럽 제작자"; }
			else{
				if (result[now].version === undefined || result[now].version == 1){
					if (link === undefined){ td.innerHTML = "\"" + title + "\" 우승"; }
					else if (link.length == 0){
						td.innerHTML = "\"" + title + "\" 종료 후 무추첨 당첨"
					}
					else{
						let res = "\"" + title + "\" 종료 후 ";
						for (let i = 0; i < link.length; i++){
							res += "<a href='" + link[i] + "'>";
							for (let _ = 0; _ < i; _++){ res += "재"; }
							res += "추첨";
							res += "</a>";
							if (i+1 != link.length){ res += " 후 "; }
						}
						td.innerHTML = res;
					}
				} else if (result[now].version == 2){
					const selected = result[now].selected;
					let res = "\"" + title + "\" 종료 후 "; let randomCount = 0;
					for (let i = 0; i < selected.length; i++){
						res += "<a href='" + selected[i].link + "'>";
						if (selected[i].type == "Random"){
							for (let _ = 0; _ < randomCount; _++){ res += "재"; } res += "추첨"
							randomCount += 1;
						}
						if (selected[i].type == "Passed"){
							res += "양도";
						}
						res += "</a>"
						if (i+1 != link.length){ res += " 후 "; }
					}
				}
			}
			tr.appendChild(td);
		}
		table.appendChild(tr);

		now = nxt;
	}

	loadMathJax();
}