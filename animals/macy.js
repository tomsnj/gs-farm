macy = document.querySelector('#macyPic')
macyCurrentPath = macy.getAttribute('src')
macyCurrentNumber = /\/(\d+)\./.exec(macyCurrentPath)[1];
macyImageCount = 46

function nextMacy() {
    newNumber = parseInt(macyCurrentNumber) + 1;
    if (newNumber > macyImageCount) {
        newNumber = 1;
    }
    macyCurrentNumber = newNumber;
    displayMacy(numberToPath(macyCurrentNumber, "macy"));
}

function previousMacy() {
    newNumber = parseInt(macyCurrentNumber) - 1;
    if (newNumber < 1) {
        newNumber = macyImageCount;
    }
    macyCurrentNumber = newNumber;
    displayMacy(numberToPath(macyCurrentNumber, "macy"));
}

function displayMacy(path) {
    macy.src = path
}

function numberToPath(number, animal) {
    return `${animal}/${number}.jpg`
}
