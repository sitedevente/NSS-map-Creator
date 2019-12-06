// Image you want to paint on tiles
let pickedImage = null;

// Allow user to erase images painted on a cell
const eraserClickListener = () => {
	pickedImage = 'eraser';
}

const addEraser = () => {
	const [eraser] = document.getElementsByClassName('eraser')
	eraser.addEventListener('click', eraserClickListener)
}

// const createImage = (imagePath) => {
// 	const img = document.createElement('img')
// 	img.setAttribute('src',imagePath)
// 	img.addEventListener('click', imageClickListener)
// 	return img
// }
