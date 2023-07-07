async function getRandQuote() {
    const api_url = 'https://api.quotable.io/random'
    const test = ('../javascript/test.json');
    const response = await fetch(api_url, {
        method: 'GET',
    });
    const result = await response.json();
    const myQuote = document.getElementById('generated-quote');
    const myAuthor = document.getElementById('author')
    const quote = result.content;
    const author = result.author;

    myQuote.textContent = (`"${quote}"`);
    myAuthor.textContent = ("―" + author);
}

async function fillTextToDiv(text, htmlLocation) {
    const textFile = (`../other/${text}.txt`);
    const response = await fetch(textFile, {
        method: 'GET',
    });
    const result = await response.text();
    const textDiv = document.getElementById(htmlLocation);

    textDiv.textContent = result;
}

let slideIndex = 1;
window.addEventListener('load', function () {
    showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("project");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle("is-active");
        mobile_menu.classList.toggle("is-active");
    })
}

function sendEmail() {
    Email.send({
        SecureToken: "969a3e0c-20e3-41f2-a54f-d6359f5e9c85",
        To: 'khindas@my.erau.edu',
        From: document.getElementById('email').value,
        Subject: "Contact Form Enquiry",
        Body: "Name: " + document.getElementById('name').value
            + "<br> Email: " + document.getElementById('email').value
            + "<br> Phone: " + document.getElementById('phone').value
            + "<br> Message: " + document.getElementById('message').value
    }).then(
        message => alert("Message Sent Successfully!")
    );
}