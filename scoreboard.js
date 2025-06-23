function formatTime(unixTime){
	const date = new Date(unixTime*1000);
	const year = (date.getFullYear()).toString().padStart(4, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	const hour = date.getHours().toString().padStart(2, '0');
	const minute = date.getMinutes().toString().padStart(2, '0');
	const second = date.getSeconds().toString().padStart(2, '0');

	return year+'-'+month+'-'+day + ' ' + hour+':'+minute+':'+second;
}

async function main(){
	const result = await callAPI(0, "https://hibye1217.github.io/baekjoon-fanclub/Data/result.json");
	
	const id = parseInt(getValueFromURL('id')); let idx = -1;
	let set = undefined; for (let i = 0; i < result.length; i++){
		if (result[i].incomplete){ break; }
		if (result[i].id == id){ set = result[i]; idx = i; }
	}
	if (set == undefined){ alert("IndexError: 입력한 id의 셋이 존재하지 않습니다."); return; }

	let previousIndex = (idx > 0 ? result[idx-1].id : undefined);
	let nextIndex = (idx+1 < result.length && !result[idx+1].incomplete ? result[idx+1].id : undefined);

	const roundTextTag = document.getElementById('round-text');
	roundTextTag.innerHTML = (previousIndex != undefined ? "<a href='./scoreboard.html?id=" + previousIndex + "'>←</a> " : "")
	                       + "<a href='https://www.acmicpc.net/group/practice/view/14615/" + result[idx].id + "'>[" + result[idx].order + "] " + result[idx].title + "</a>"
						   + (nextIndex != undefined ? " <a href='./scoreboard.html?id=" + nextIndex + "'>→</a>" : "");
	const creatorTextTag = document.getElementById('creator-text');
	creatorTextTag.innerHTML = "Created by " + result[idx].creator;

	let indexToIndex = {}; const problemCount = set.problems.length;
	for (let i = 0; i < problemCount; i++){ indexToIndex[set.problems[i].index] = i; }
	let scoreboard = []; // { handle: string, count: int, solved: array<int> } // solved: time as solved, -time as wrong, 0 as not tried
	result[idx].submissions.forEach(submission => {
		let scoreboardIndex = 0;
		while (scoreboardIndex < scoreboard.length){
			if (scoreboard[scoreboardIndex].handle == submission.handle){ break; }
			else{ scoreboardIndex++; }
		}
		if (scoreboardIndex == scoreboard.length){
			scoreboard.push({ handle: submission.handle, count: 0, solved: Array(problemCount).fill(0) });
		}
		let problemIndex = indexToIndex[submission.problem];
		if (submission.verdict == "AC" && scoreboard[scoreboardIndex].solved[problemIndex] <= 0){
			scoreboard[scoreboardIndex].solved[problemIndex] = submission.time;
			scoreboard[scoreboardIndex].count += 1;
		}
		else if (submission.verdict != "AC" && submission.verdict != "CE" && scoreboard[scoreboardIndex].solved[problemIndex] <= 0){
			scoreboard[scoreboardIndex].solved[problemIndex] = -submission.time;
		}
		while (scoreboardIndex > 0){
			if (scoreboard[scoreboardIndex-1].count < scoreboard[scoreboardIndex].count){
				[scoreboard[scoreboardIndex-1], scoreboard[scoreboardIndex]] = [scoreboard[scoreboardIndex], scoreboard[scoreboardIndex-1]];
				scoreboardIndex -= 1;
			} else{ break; }
		}
	});

	const participantCount = scoreboard.length;
	const LtableTag = document.getElementById('scoreboard-left').children[0];
	const RtableTag = document.getElementById('scoreboard-right').children[0];
	
	{
		const tr = document.createElement('tr');
		tr.className = "headerRow";
		for (let i = 0; i < problemCount; i++){
			const th = document.createElement('th');
			th.className = 'headerCell';
			th.innerHTML = "<a href='https://www.acmicpc.net/problem/" + set.problems[i].id + "'>" + set.problems[i].index + "<br><span style='font-size: 0.75em'>/&lt;" + set.problems[i].id + "&gt;</span></a>"
			tr.appendChild(th);
		}
		RtableTag.appendChild(tr);
	}
	let j = 0; for (let i = 0; i < participantCount; i++){
		let first = (j==i); if (j == i){
			while (j < participantCount){
				if (scoreboard[j].count == scoreboard[i].count){ j++; }
				else{ break; }
			}
		}

		{
			const tr = document.createElement('tr'); tr.className = 'row';
			if (first){
				const td = document.createElement('td');
				td.rowSpan = j-i; td.innerHTML = scoreboard[i].count;
				tr.appendChild(td);
			}
			{
				const td = document.createElement('td');
				td.innerHTML = scoreboard[i].handle;
				tr.appendChild(td);
			}
			LtableTag.appendChild(tr);
		}
		{
			const tr = document.createElement('tr'); tr.className = 'row';
			for (let p = 0; p < problemCount; p++){
				const td = document.createElement('td');
				if (scoreboard[i].solved[p] > 0){
					td.className = 'accepted';
					td.innerHTML = "✅<br><span style='font-size: 0.75em'>" + formatTime(scoreboard[i].solved[p]) + "</span>";
				}
				if (scoreboard[i].solved[p] < 0){
					td.className = 'failed';
					td.innerHTML = "❌<br><span style='font-size: 0.75em'>" + formatTime(-scoreboard[i].solved[p]) + "</span>";
				}
				tr.appendChild(td);
			}
			RtableTag.appendChild(tr);
		}
	} loadMathJax();
}