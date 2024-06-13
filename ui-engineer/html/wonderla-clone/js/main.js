let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlides() {
        if (slideIndex >= slides.length) { slideIndex = 0 }
        if (slideIndex < 0) { slideIndex = slides.length - 1 }
        slides.forEach(slide => slide.style.transform = `translateX(${-slideIndex * 100}%)`);
    }

    function nextSlide() {
        slideIndex++;
        showSlides();
    }

    function prevSlide() {
        slideIndex--;
        showSlides();
    }

    function autoSlide() {
        nextSlide();
    }

    setInterval(autoSlide, 6000);
    showSlides();

let slideIndex1 = 0;
    const slides1 = document.querySelectorAll('.slide1');

    function showSlides1() {
        if (slideIndex1 >= slides1.length) { slideIndex1 = 0 }
        if (slideIndex1 < 0) { slideIndex1 = slides1.length - 1 }
        slides1.forEach(slide => slide.style.transform = `translateX(${-slideIndex1 * 100}%)`);
    }

    function nextSlide1() {
        slideIndex1++;
        showSlides1();
    }

    function prevSlide1() {
        slideIndex--;
        showSlides1();
    }

    function autoSlide1() {
        nextSlide1();
    }

    setInterval(autoSlide1, 6000);
    showSlides1();  

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Format data as URL parameters
    var formData = "name=" + encodeURIComponent(name) +
                    "&email=" + encodeURIComponent(email) +
                    "&message=" + encodeURIComponent(message);

    // Redirect to contact_details.html with form data
    window.location.href = "contact_details.html?" + formData;
}    

window.onload = function() {
    // Retrieve URL parameters
    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get('name');
    var email = urlParams.get('email');
    var message = urlParams.get('message');

    // Display contact details
    document.getElementById('name').innerText = name;
    document.getElementById('email').innerText = email;
    document.getElementById('message').innerText = message;
}

const print = {
    pannuda : function text($text){
        alert($text);
    }
}