async function getRandQuote() {
    const api_url = 'https://api.quotable.io/random'
    const response = await fetch(api_url, {
        method: 'GET',
    });
    const result = await response.json();
    const myQuote = document.getElementById('italicize-quote');
    const myAuthor = document.getElementById('author')
    const quote = result.content;
    const author = result.author;

    myQuote.textContent = (`${quote}`);
    myAuthor.textContent = ("―" + author);
}


async function getRandFact() {
    const factURL = 'https://nekos.life/api/v2/fact'
    const res = await fetch(factURL, {
        method: 'GET',
    })
    const result = await res.json();

    const myFact = document.getElementById('generated-fact');
    const fact = result.fact;

    myFact.textContent = (`${fact}`);
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

window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle("is-active");
        mobile_menu.classList.toggle("is-active");
    })
}

window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
    var submitbtn = document.getElementById("submit-btn");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        status.classList.add("success");
        status.style.display = ("block");
        status.innerHTML = ("Success!");

    }

    function error() {
        status.classList.add("error");
        status.innerHTML = ("Oops! There was a problem.");
        status.style.display = ("block");
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}