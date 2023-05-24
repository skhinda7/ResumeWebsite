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

function pickRandGradient() {
    const list = fetchJSON('../javascript/randomgrad.json');

    var randomIndex = Math.floor(Math.random() * list.length);
    var randomName = list[randomIndex].name;
    var colors = [list[randomIndex].colors[0], list[randomIndex].colors[1], list[randomIndex].colors[2]];

    console.log("Random Name: " + randomName);
    console.log("Colors: " + colors);

    const pickedColor = [randomName, colors];

    return pickedColor;
}

async function fetchJSON(location) {
    const object = await fetch(location, {
        method: 'GET',
    })
    return object.json();
}

pickRandGradient();


