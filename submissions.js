let result = "";
	
const table = document.getElementById('status-table').children[1].children;
//console.log(table)
for (let i = 0; i < table.length; i++){
	const tr = table[i];

	const user = tr.children[1].innerText;
	const id = tr.children[0].innerText;
	const idx = tr.children[2].children[1].innerHTML;
	const verdict = tr.children[3].innerText;
	let t = tr.children[8].children[0].dataset.originalTitle;
	const Y = t.substring( 0, t.indexOf('년') );
	const M = t.substring( t.indexOf('년')+2, t.indexOf('월') );
	const D = t.substring( t.indexOf('월')+2, t.indexOf('일') );
	const T = t.substring( t.indexOf('일')+2 );
	const time = Y + '.' + (M.length==1 ? '0'+M : M) + '.' + (D.length==1 ? '0'+D : D) + '. ' + T;
	result += '{ "user": "' + user + '", "id": "' + id + '", "idx": "' + idx + '", "verdict": "' + verdict + '", "time": "' + time + '" },\n';
}
console.log(result);