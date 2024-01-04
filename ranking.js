function findIndex(data, user){
	for (let i = 0; i < data.length; i++){
		if (data[i].name == user){ return i; }
	} return -1;
}
function toIndex(problemSet, problem){
	for (let i = 0; i < problemSet.length; i++){
		if (problemSet[i].index == problem){ return problemSet[i].id; }
	}
	console.error("Problem Not Found", problemSet, problem);
}

async function main(){
	const result = await callAPI(0, "https://hibye1217.github.io/baekjoon-fanclub/Data/result.json");
	
	let data = [];
	for (let i = 0; i < result.length; i++){
		if (result[i].incomplete){ break; }
		const problemSet = result[i].problems;
		const submissions = result[i].submissions;
		
		if (findIndex(data, result[i].creator) == -1){
			data.push({name: result[i].creator, solved: Array(), practiced: Array(), created: Array()});
		}
		let idx = findIndex(data, result[i].creator);
		data[idx].practiced[i] = data[idx].created[i] = true;
		
		for (let j = 0; j < submissions.length; j++){
			const submission = submissions[j];
			if (submission.verdict != "AC"){ continue; }
			if (findIndex(data, submission.handle) == -1){
				data.push({name: submission.handle, solved: Array(), practiced: Array(), created: Array()});
			}
			let idx = findIndex(data, submission.handle);
			data[idx].solved[toIndex(problemSet, submission.problem)] = true;
			data[idx].practiced[i] = true;
		}
	}
	for (let i = 0; i < data.length; i++){
		data[i].solveCount = 0;
		for (let j = 0; j < data[i].solved.length; j++){
			data[i].solveCount += (data[i].solved[j] ? +1 : +0);
		}
		data[i].practiceCount = data[i].createCount = 0;
		for (let j = 0; j < Math.max(data[i].practiced.length, data[i].created.length); j++){
			data[i].practiceCount += (data[i].practiced[j] || data[i].created[j] ? +1 : +0);
			data[i].createCount += (data[i].created[j] ? +1 : +0);
		}
	}
	data.sort((a, b) => (a.practiceCount != b.practiceCount ? b.practiceCount - a.practiceCount : b.solveCount - a.solveCount));
	
	const table = document.getElementById('scoreboard-table').children[1];
	let rank = 0; for (let i = 0; i < data.length; i++){
		if (i==0 || data[i-1].practiceCount != data[i].practiceCount || data[i-1].solveCount != data[i].solveCount){ rank = i+1; }
		const tr = document.createElement('tr');
		{ // Rank
			const td = document.createElement('td');
			td.innerHTML = rank;
			tr.appendChild(td);
		}
		{ // User
			const td = document.createElement('td');
			td.innerHTML = data[i].name;
			tr.appendChild(td);
		}
		{ // PracticeCount
			const td = document.createElement('td');
			td.innerHTML = data[i].practiceCount + " <span style='font-size: 0.7em; color: #BBBBBB'>" + data[i].createCount + "회 제작</span>";
			tr.appendChild(td);
		}
		{ // SolveCount
			const td = document.createElement('td');
			td.innerHTML = data[i].solveCount;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}