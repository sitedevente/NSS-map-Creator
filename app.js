const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const { remote } = require("electron")

const app = remote.app;
const readDirAsync = promisify(fs.readdir);

// Image you want to paint on tiles
let pickedImaged = null;

// Allow user to choose an image to paint on grid's cells
const imageClickListener = ({currentTarget}) => {
	pickedImaged = currentTarget;
	console.log(pickedImaged)
};

const createImage = (imagePath) => {
	const img = document.createElement('img')
	img.setAttribute('src',imagePath)
	img.addEventListener('click', imageClickListener)
	return img
}

// Allow user to paint on the cliked tile
const tileClickListener = ({currentTarget}) => {
	if(pickedImaged){
		if(currentTarget.hasChildNodes()){
			currentTarget.childNodes[0].remove();
			console.log('deleted')
		}
		currentTarget.appendChild(pickedImaged.cloneNode(true))
		console.log('added')
	}
	console.log('finished')
};

const createCell = () => {
	const cell = document.createElement('div')
	cell.setAttribute('class','cell')
	cell.addEventListener('click', tileClickListener)
	return cell
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
	
	list.forEach( imageName => {
		const imagePath = path.join(app.getAppPath(), '/images/', imageName);
		sidebar.appendChild(createImage(imagePath))
	})
}

document.addEventListener('DOMContentLoaded', () => {
	drawTileManager();
	drawImages();
})

