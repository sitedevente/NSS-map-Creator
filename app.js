const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const { remote } = require("electron")

const app = remote.app;
const readDirAsync = promisify(fs.readdir);

const drawImages = async () => {
	const [sidebar] = document.getElementsByClassName('sidebar');
	const imageDir = path.join(app.getAppPath(), 'data/tilesets/testset');
	const list = await readDirAsync(imageDir)
	
	list.forEach( imageName => {
		const imagePath = path.join(app.getAppPath(), 'data/tilesets/testset/', imageName);
		sidebar.appendChild(createImage(imagePath))
	})
}

document.addEventListener('DOMContentLoaded', () => {
	addEraser();
	drawTileManager();
	drawImages();
})

