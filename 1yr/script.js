document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "polaroids/pol1.jpeg",
        "polaroids/pol2.jpeg",
        "polaroids/pol3.jpeg",
        "polaroids/pol4.jpeg",
        "polaroids/pol5.jpeg",
        "polaroids/pol6.jpeg",
        "polaroids/pol7.jpeg",
        "polaroids/pol8.jpeg",
        "polaroids/pol9.jpeg",
        "polaroids/pol10.jpeg",
        "polaroids/pol11.jpeg",
        "polaroids/pol12.jpeg",
        "polaroids/pol13.jpeg",
        "polaroids/pol14.jpeg"
    ];

    const indexes = [];
    let randomIndex;

    for (let i = 0; i < 4; i++) {
        while(true){
            randomIndex = Math.floor(Math.random() * images.length);
            if (!indexes.includes(randomIndex)){
                indexes.push(randomIndex);
                break;
            }
        }
        const dynamicImage = document.getElementById("image" + (i+2).toString());
        dynamicImage.src = images[randomIndex];
    }
});



document.getElementById('unblurButton').addEventListener('click', function() {
    var image = document.getElementById('letter-img');
    var button = document.getElementById('unblurButton');
  
    var computedStyle = window.getComputedStyle(image);
  
    if (computedStyle.filter === 'blur(10px)' || computedStyle.filter === 'blur(10px) grayscale(0)') {
      image.style.filter = 'none';
      button.style.display = 'none';
    } else {
      image.style.filter = 'blur(10px)'; // Adjust the blur amount as needed
      button.style.display = 'none';
    }
  });

  