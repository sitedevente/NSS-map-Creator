$(document).ready(() => {

    // function keyPress(keyCode) { if (Element. == ) { }}

    function initCarousel() {
        $('#tileCarousel').carousel({
            duration: 100,
            padding: 90,
            shift: 100
        })
    }

    $('#tilesets').modal({
        dismissible: false,
        'onOpenEnd': initCarousel
    })

    $('.tooltipped').tooltip()


});