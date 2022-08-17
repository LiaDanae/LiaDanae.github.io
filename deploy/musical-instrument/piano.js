console.log('Hola mundo!');
const myName = 'Lia';
let myAge = 16;
let x = 3;
let y = 4;
const likesMusic = true;
console.log('myName', myName);
console.log('myAge', myAge);
console.log('x', x);
console.log('y', y);
console.log('likesMusic', likesMusic);

// myName='Juan';

console.log('myName', typeof myName);
console.log('myAge', typeof myAge);
console.log('x', typeof x);
console.log('y', typeof y);
console.log('likesMusic', typeof likesMusic);

let z = y * x;
console.log(z);

z = y / x;
console.log(z);

z = y + x;
console.log(z);

z = y - x;
console.log(z);

console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);



// let compraRealizada = false;
// let pisoBarrido = true;
// let dinero;
// if(compraRealizada==true){
//     dinero = 10;
// }
// else if(pisoBarrido==true){
//     dinero = 10;
// }
// else{
//     dinero = 5;
// }

let compraRealizada = false;
let pisoBarrido = true;
let dinero;
if (compraRealizada == true || pisoBarrido == true) {
  dinero = 10;
} else {
  dinero = 5;
}

console.log('El dinero de tu hermanito es:', dinero);

let compraRealizada2 = false;
let pisoBarrido2 = true;
let dinero2;
if (compraRealizada2 == true || pisoBarrido2 == true) {
  dinero2 = 20;
} else {
  dinero2 = 0;
}

console.log('El dinero de tu hermanito es:', dinero2);

// YOB = Year of Birth
let YOB = 2006;
const d = new Date();
// CY = Current Year
let CY = d.getFullYear();

for (let year = YOB; year <= CY; year++) {
  if (year == YOB) {
    console.log('En ' + year + ' yo nací');
  } else if (year - YOB == 1) {
    console.log('En ' + year + ' yo tenía ' + (year - YOB) + ' año');
  } else if (year == CY) {
    console.log('En el ' + year + ' yo tendré ' + (year - YOB) + ' años');
  } else {
    console.log('En ' + year + ' yo tenía ' + (year - YOB) + ' años');
  }
}

for (let num = 0; num <= 35; num++) {
  console.log('No debo de comerme el lonche de mis compañeros');
}

let year = YOB;
while (year <= CY) {
  let age = year - YOB;
  if (year == YOB) {
    console.log('En ' + year + ' yo nací');
  } else if (age == 1) {
    console.log('En ' + year + ' yo tenía ' + age + ' año');
  } else if (year == CY) {
    console.log('En el ' + year + ' yo tendré ' + age + ' años');
  } else {
    console.log('En ' + year + ' yo tenía ' + age + ' años');
  }
  year++;
}

// function aCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
// }

const aCelsius = (fahrenheit) => (5 / 9) * (fahrenheit - 32);
console.log(aCelsius(100));


const playNote = (key) => {
  // Obtenemos la nota
  const noteAudio = document.getElementById(key.dataset.note);

  // Reseteamos la ejecución de la nota
  // Utilizamos el método play de la nota

  noteAudio.play();
}

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

const nameElement = document.querySelector('#name');
const ageElement = document.querySelector('#age');
const likesMusicElement = document.querySelector('#likesMusic');

console.log('nameElement', nameElement)
console.log('ageElement', ageElement)
console.log('likesMusicElement', likesMusicElement)

nameElement.textContent = myName;
ageElement.textContent = myAge;

if (likesMusic == true) {
  likesMusicElement.textContent = 'Me gusta la música';
} else {
  likesMusicElement.textContent = 'No me gusta la música';
}

const body = document.querySelector('body');
const text = document.createElement('p');
text.textContent = 'Hola mundo!';
body.appendChild(text);
body.removeChild(text);

document.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

const persona = {
  nombre: {
    primerNombre: 'Lia',
    segundoNombre: 'Danae',
    apellidos: ['Lopez', 'Morales',],
  },
  edad: 16,
  bio: function () {
    console.log(this.primerNombre + ' Tiene ' + this.edad + ' años');
  },
  presentarse: function () {
    console.log('Hola! Mi nombre es ' + this.nombre.primerNombre);
  }
};
const frutas = ['mango', 'fresa', 'kiwi', 'manzana', 'melon'];
frutas[5] = 'pina';
frutas[0] = 'higo';
frutas.push('frambuesa');
frutas.shift();
console.log(frutas);

const calificaciones = [10, 6, 9, 8, 7, 4, 3, 9, 7];
const reprobados = calificaciones.find(calificaciones=>calificaciones<=5);
const suma = calificaciones.reduce(
  (valorAnterior, valorActual) => valorAnterior + valorActual,
  0
)
const mayora8 = calificaciones.map(calificaciones=>calificaciones>=8);
const aprobados = calificaciones.filter(calificaciones=>calificaciones>5);

const getAge = () => {
  fetch('https://api.agify.io?name=noe').then((response) => response.json()).then((data) => console.log(data))
}
getAge();

const getGuessedAge = async () => {
  const response = await fetch('https://api.agify.io?name=noe');
  const data = await response.json();
  return data.age;
}

const displayGuessedAge = async () =>{
  const guessedAgeSpan = document.getElementById('guessedAge');
  const guessedAge = await getGuessedAge();
  guessedAgeSpan.textContent = guessedAge;
}

displayGuessedAge();


// const getAge = async () => {
//     const response = await fetch('https://api.agify.io?name=noe');
//     console.log(response);
//
//     const data = await response.json();
//     console.log(data)
// }
//
// const printJuan = () => {
//     let age = 10;
//     let years = 5;
//     console.log('Juan' + (age + years));
// }
//
// const main = async () => {
//     await getAge();
//
//     printJuan();
//     console.log('Pepe')
// }
//
//
// main();
