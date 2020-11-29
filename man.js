const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let farenheit;
let celsius;

// T(°F) = T(°C) x 1,8 +32
// T(°C) = (T(°F)-32)/1.8

const swap = () => {
    if (one.innerText === '°C'){
        one.innerText = '°F';
        two.innerText = '°C'; 
        result.innerText = ''
    } else {
        one.innerText = '°C';
        two.innerText = '°F';
        result.innerText = '' 
    }
    
}

const celToFar = () => {
    farenheit = converter.value * 1.8 + 32; 
    result.innerText = `${converter.value} oC to ${farenheit.toFixed(1)} oF`;
    converter.value = "";
}

const farToCel = () => {
    celsius = (converter.value -32)/1.8;
    result.innerText = `${converter.value} oF to ${celsius.toFixed(1)} oC`;
    converter.value = "";
}

const conversion = () => {
    if (converter.value !== ''){
        if(one.innerText === '°C'){
            celToFar();
        }else{
            farToCel();
        }
    }else{
        result.innerText='Wpisz wartość'
    }
}

const reset = () => {
    result.innerText = '';
}

convBtn.addEventListener('click', conversion);
changeBtn.addEventListener('click', swap);
resetBtn.addEventListener('click', reset);
