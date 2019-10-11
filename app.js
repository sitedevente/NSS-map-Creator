const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const { remote } = require("electron")

const app = remote.app;
const readDirAsync = promisify(fs.readdir);

// picked cell
let pick = null;

const playerClick = ({currentTarget}) => {
	pick = currentTarget;
	console.log(pick)
};

const createCell = () => {
	const cell = document.createElement('div')
	cell.setAttribute('class','cell')
	// replace innerText with img tag
	// cell.innerText = 0;
	cell.addEventListener('click', playerClick)
	return cell
}

const createImage = (imagePath) => {
	const img = document.createElement('img')
	img.setAttribute('src',imagePath)
	img.addEventListener('click', playerClick)
	return img
}

const drawTileManager = () => {
	const [main] = document.getElementsByTagName('main');
	const gridSize = 32*18;
	for(let cellNumber = 0 ; cellNumber < gridSize ; ++cellNumber){
		main.appendChild(createCell())
	}
}

const drawImages = async () => {
	const [sidebar] = document.getElementsByClassName('sidebar');
	const imageDir = path.join(app.getAppPath(), 'images');
	const list = await readDirAsync(imageDir)
	
	console.log(sidebar);
	list.forEach( imageName => {
		const imagePath = path.join(app.getAppPath(), '/images/', imageName);
		sidebar.appendChild(createImage(imagePath))
	})	
}

document.addEventListener('DOMContentLoaded', () => {
	drawTileManager();
	drawImages();
})

