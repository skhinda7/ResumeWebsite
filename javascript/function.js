async function getRandQuote() {
    const api_url = 'https://api.quotable.io/random'
    const test = ('../javascript/test.json')
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

window.addEventListener('load', getRandQuote());