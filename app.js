// import { remote } from "electron";
// const app = remote.app;

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
  
document.addEventListener('DOMContentLoaded', () => {
	const [main] = document.getElementsByTagName('main');
	const gridSize = 32*18;
	for(let cellNumber = 0 ; cellNumber < gridSize ; ++cellNumber){
		main.appendChild(createCell())
	}
})