const textarea = document.getElementById('textarea');
const title = document.getElementById('title');

document.getElementById("download-button").onclick = function() {

	if(textarea.value == null || textarea.value == "") {

		title.style.color = '#3a7ec7';
		title.innerText = "Type Something!";

		setTimeout( () => {
			title.style.color = "white"
			title.innerText = "Save your text!";
		}, 1000)

	} else {
		var a = document.createElement('a');

		a.href = 'data:text/plain;base64,' + btoa(textarea.value);
	
		a.textContent = 'download';
		a.download = 'text.txt';
		a.click();
	}
}