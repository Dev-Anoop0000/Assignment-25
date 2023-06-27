const image = document.getElementById('image');
console.log(image);

let imagePositionX = 0;
let imagePositionY = 0;


function moveImage(directionX, directionY) {
    imagePositionX += directionX;
    imagePositionY += directionY;
    image.style.transform = `translate(${imagePositionX}px, ${imagePositionY}px)`;
}


document.addEventListener('keydown', function(event) {

    switch (event.keyCode) {
        case 38: // Arrow Up
            moveImage(0, -10);
            break;
        case 40: // Arrow Down
            moveImage(0, 10);
            break;
        case 37: // Arrow Left
            moveImage(-10, 0);
            break;
        case 39: // Arrow Right
            moveImage(10, 0);
            break;
        default:
            break;
    }
});