async function main(){
	let solved = [];
	{
		const user = getValueFromURL('search-handle', "");
		if (user != ""){

		}
	}

	const result = await callAPI(0, "https://hibye1217.github.io/baekjoon-fanclub/Data/result.json");
	const len = result.length;

	let res = [];
	for (let i = 0; i < len; i++){
		const set = result[i];

		let map = {};

		const name = set.title;
		for (let j = 0; j < set.problems.length; j++){
			const problem = set.problems[j];
			
			const id = problem.id;
			const index = problem.index;
			const title = problem.title;
			
			map[index] = id;

			if (res[id] === undefined){
				res[id] = {};
				res[id].id = id;
				res[id].title = title;
				res[id].appearance = [];
			}
			res[id].appearance.push({ title: name, index: index, solved: -1 });
		}

		for (let j = 0; j < set.submissions.length; j++){
			const submission = set.submissions[j];

			const handle = submission.handle;
			const index = submission.problem; const id = map[index];
			const verdict = submission.verdict;

			if (verdict != "AC"){ continue; }
			if (handle == set.creator){
				if (res[id].appearance[res[id].appearance.length-1].solved == -1){
					res[id].appearance[res[id].appearance.length-1].solved = 0;
				}
			}
			else{ res[id].appearance[res[id].appearance.length-1].solved = +1; }
		}
	}

	let count = 0;

	const table = document.getElementById('problem-table').children[1];
	for (let i = 0; i < res.length; i++){
		if (res[i] === undefined){ continue; }
		const problem = res[i]; count += 1;

		const tr = document.createElement('tr');
		{
			const td = document.createElement('td');
			td.innerHTML = problem.id;
			tr.appendChild(td);
		}
		{
			const td = document.createElement('td');
			td.innerHTML = "<a href='https://acmicpc.net/problem/" + problem.id + "'>" + problem.title + "</a>";
			tr.appendChild(td);
		}
		{
			const td = document.createElement('td');
			let res = "";
			for (let i = 0; i < problem.appearance.length; i++){
				const obj = problem.appearance[i];

				if (obj.solved == -1){ res += "<span style='color: #BBBBBB; text-decoration: line-through'>"; }
				else if (obj.solved == 0){ "<span style='color: #999999'>"; }
				res += obj.title + " " + obj.index + "번";
				if (obj.solved <= 0){ res += "</span>" }
				
				if (i+1 != problem.appearance.length){ res += " / "; }
			}
			td.innerHTML = res;
			tr.appendChild(td);
		}
		if (solved[i]){ tr.style.backgroundColor = "#99FF99"; }
		table.appendChild(tr);
	}

	const countTag = document.getElementById('problem-count');
	countTag.innerHTML = "현재까지 나온 문제 수: " + count;

	loadMathJax();
}