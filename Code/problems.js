let ans = "";
const tag = document.getElementsByClassName('list-group')[0];
let l = tag.childElementCount;
for (let i = 0; i < l; i++){
    const li = tag.children[i];
    const link = li.children[0].href;

	const id = link.substr( link.indexOf('problem/') + 8 );
	const idx = li.children[0].children[0].innerText;
	const name = li.innerText.substr( li.innerText.indexOf('-') + 2 );

    // console.log(id, idx, name);
	ans += '{ "id": ' + id + ', "idx": "' + idx + '", "name": "' + name + '" },\n'
}
console.log(ans)