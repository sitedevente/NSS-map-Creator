$(document).ready(() => {
    // Image you want to paint on tiles
    let pickedImage = null;
    
    $('.tooltipped').tooltip()

    // Allow user to choose an image to paint on grid's cells
    const imageClickListener = ({currentTarget}) => {
        console.log('hihi')
        pickedImage = $(currentTarget).parent().parent().find('.card-image img')[0]
        console.log(pickedImage)
    };

    function initCarousel() {
        $('#tileCarousel').carousel({
            duration: 100,
            padding: 90,
            shift: 100
        })

        $('.btn.green.right').click(imageClickListener);
    }

    const createCell = () => {
        const cell = document.createElement('div')
        cell.setAttribute('class', 'cell')
        cell.addEventListener('click', tileClickListener)
        return cell
    }

    
    const drawTileManager = () => {
        const [grid] = $('#tile-manager');
        const gridSize = 32 * 18;
        for (let cellNumber = 0; cellNumber < gridSize; ++cellNumber) {
            grid.appendChild(createCell())
        }
    }

    drawTileManager();

    // Allow user to paint on the cliked tile
    function tileClickListener ({currentTarget}) {
        if(pickedImage){
            if(currentTarget.hasChildNodes()){
                currentTarget.childNodes[0].remove();
                console.log('deleted')
            }
            if(pickedImage != 'eraser'){
                currentTarget.appendChild(pickedImage.cloneNode(true))
                console.log('added')
            }
        }
        console.log('finished')
    };

    //$('.cell').click(tileClickListener)

    $('#tilesets').modal({
        dismissible: false,
        'onOpenEnd': initCarousel
    })


});