horses = document.querySelector('#horsesPic')
horsesCurrentPath = horses.getAttribute('src')
horsesCurrentNumber = /\/(\d+)\./.exec(horsesCurrentPath)[1];
horsesImageCount = 17

function nextHorses() {
    newNumber = parseInt(horsesCurrentNumber) + 1;
    if (newNumber > horsesImageCount) {
        newNumber = 1;
    }
    horsesCurrentNumber = newNumber;
    displayHorses(numberToPath(horsesCurrentNumber, "horses"));
}

function previousHorses() {
    newNumber = parseInt(horsesCurrentNumber) - 1;
    if (newNumber < 1) {
        newNumber = horsesImageCount;
    }
    horsesCurrentNumber = newNumber;
    displayHorses(numberToPath(horsesCurrentNumber, "horses"));
}

function displayHorses(path) {
    horses.src = path
}

function numberToPath(number, animal) {
    return `${animal}/${number}.jpg`
}
