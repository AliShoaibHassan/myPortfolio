document.getElementById('toggle-btn').addEventListener('click', function() {
    var element = document.getElementById("top");
    var toggleBtn = document.getElementById("toggle-btn");
    
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "flex"; // Show the element
        toggleBtn.innerHTML = '<i class="fa-solid fa-angles-up"></i>'; // Change icon to up arrow
        document.querySelector(".main-sec").style.height = "80vh"
    } else {
        element.style.display = "none"; // Hide the element
        toggleBtn.innerHTML = '<i class="fa-solid fa-angles-down"></i>'; // Change icon to down arrow
        document.querySelector(".main-sec").style.height = "100vh"
    }
});


// Initialize the carousel
var carouselElement = document.getElementById('carouselExampleCaptions');
var carousel = new bootstrap.Carousel(carouselElement, {
    interval: 3100, // Slide change interval in milliseconds
    ride: 'carousel'
});