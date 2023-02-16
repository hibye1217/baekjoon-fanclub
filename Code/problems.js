const table = document.getElementsByClassName('list-group')[0].children;

let result = "";
for (let i = 0; i < table.length; i++){
	const tag = table[i].children[0];

	const link = tag.href; const id = parseInt( link.substring( link.lastIndexOf('/')+1 ) );
	const index = tag.children[0].innerText;
	const text = tag.innerText; const title = text.substring( text.indexOf('-')+2 );

	result += "{ \"id\": " + id + ", \"index\": \"" + index + "\", \"title\": \"" + title + "\" },\n";
}
console.log(result);