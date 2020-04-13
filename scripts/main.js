const btnChangeColor = document.getElementById("btn-color");
const btnChangeText = document.getElementById("btn-text");
const btnChangeBackground = document.getElementById("btn-background");


btnChangeColorClickHandler = (e) => {
    e.target.style.color = 'red';
}

btnChangeTextClickHandler = (e) => {
    e.target.innerText = 'Changed!!!';
}

btnChangeBackgroundClickHandler = (e) => {
    e.target.style.backgroundColor = 'goldenrod';
}

btnChangeColor.addEventListener('click', btnChangeColorClickHandler);
btnChangeText.addEventListener('click', btnChangeTextClickHandler);
btnChangeBackground.addEventListener('click', btnChangeBackgroundClickHandler);