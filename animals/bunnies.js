bunnies = document.querySelector('#bunniesPic')
bunniesCurrentPath = bunnies.getAttribute('src')
bunniesCurrentNumber = /\/(\d+)\./.exec(bunniesCurrentPath)[1];
bunniesImageCount = 16

function nextBunnies() {
    newNumber = parseInt(bunniesCurrentNumber) + 1;
    if (newNumber > bunniesImageCount) {
        newNumber = 1;
    }
    bunniesCurrentNumber = newNumber;
    displayBunnies(numberToPath(bunniesCurrentNumber, "bunnies"));
}

function previousBunnies() {
    newNumber = parseInt(bunniesCurrentNumber) - 1;
    if (newNumber < 1) {
        newNumber = bunniesImageCount;
    }
    bunniesCurrentNumber = newNumber;
    displayBunnies(numberToPath(bunniesCurrentNumber, "bunnies"));
}

function displayBunnies(path) {
    bunnies.src = path
}

function numberToPath(number, animal) {
    return `${animal}/${number}.jpg`
}
