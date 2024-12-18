const photos = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg']; // Add your photo filenames here
let currentIndex = 0;

function changePhoto() {
    const photoElement = document.getElementById('photo');
    currentIndex = (currentIndex + 1) % photos.length;
    photoElement.src = photos[currentIndex];
}

setInterval(changePhoto, 3000); // Change photo every 3 seconds

