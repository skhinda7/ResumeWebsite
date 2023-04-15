function loadTextFromFile(file, headingId) {
    fetch(file)
        .then(response => response.text())
        .then(text => {
            document.getElementById(headingId).textContent = text;
        })
        .catch(error => {
            console.error(`Error loading text from file: ${error}`);
        });
}