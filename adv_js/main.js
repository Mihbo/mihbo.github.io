const inRadius = document.getElementById('radius');
const bnCalc = document.getElementById('calc');
const bnShow = document.getElementById('show-image');
const bnArray = document.getElementById('array');

const calcClickHandler = (e) => {
    e.preventDefault();
    const radius = +inRadius.value;
    const vol = 4/3 * Math.PI * Math.pow(radius, 3);
    document.getElementById('vol').innerText = vol.toFixed(4);
}

const showClickHandler = (e) => {
    e.preventDefault();
    const img = document.getElementById('img');
    img.src= 'https://picsum.photos/200?random=1'
    
}

const arrayClickHandler = (e) => {
    e.preventDefault();
    const p = e.target.parentElement.querySelector('p');
    const h3 = e.target.parentElement.querySelectorAll('h3');
    const arr = [];
    for(let i = 0; i < 10; i++) {
        arr.push((Math.random()*100).toFixed(0));
    }
    
    p.innerText = 'Array: ' + arr.join(', ');

    let aMin = Math.min(...arr);
    let aMax = Math.max(...arr);
    h3[0].innerText = 'Min: ' + aMin;
    h3[1].innerText = 'Max: ' + aMax;

}

bnCalc.addEventListener('click', calcClickHandler);
bnShow.addEventListener('click', showClickHandler);
bnArray.addEventListener('click', arrayClickHandler);
