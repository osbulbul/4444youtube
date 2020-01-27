const express 	= require('express');
const cors 		= require('cors');
const ytdl		= require('ytdl-core');
const app 		= express();

app.use(cors());

app.listen(4000, () => {
	console.log('Server works!');
});

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('public/index.html');
});

app.get('/download', (req, res) => {
	var URL = req.query.URL;
	ytdl.getBasicInfo(URL, {}, (err, info) => {
		res.send(info);
	});
	// res.header('Content-Disposition', 'attachment;filename="video.mp4"');
	// ytdl(URL, {format:'mp4', quality:'18'}).pipe(res);
});