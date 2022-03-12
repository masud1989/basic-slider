// console.log('OK')
const images = [
    'images/image-1.jpg',
    'images/image-2.jpg',
    'images/image-3.jpg',
    'images/image-4.jpg',
    'images/image-5.jpg',
    'images/image-6.jpg',
    'images/image-7.jpg',
    'images/image-8.jpg',
    'images/image-9.jpg'
];

let imageIndex = 0;
const sliderImageElement = document.getElementById('slider-image');
setInterval( () => {
    if(imageIndex >= images.length){
        imageIndex = 0;
    }
    const imageUrl = images[imageIndex];
    sliderImageElement.setAttribute('src', imageUrl);
    imageIndex++;
},1000)