var convertBtn = document.querySelector('.download-button');
var URLinput = document.querySelector('.url-input');
var videoCard = document.querySelector('#video-card');

convertBtn.addEventListener('click', () => {
    sendURL(URLinput.value);
});

function sendURL(URL) {
    fetch("http://localhost:4000/download?URL="+URL).then((response) => {
		return response.json();
	}).then((myJson) => {
		console.log(myJson);
		videoCard.classList.add("active");
	});
}