// const botao = document.querySelectorAll('.tecla');
// const som = document.querySelectorAll('audio');

// function tocaSom(e) {
//     som[e].play();
// }

// for (let e = 0; e < botao.length; e++) {
//     botao[e].onclick = () => tocaSom(e);
    
// }

// // MODO 2********************
// const buttons = document.querySelectorAll('.tecla');
// const sounds = document.querySelectorAll('audio');

// buttons.forEach((button, index) => {
//     button.addEventListener('click', () => sounds[index].play());
// });

const buttons = document.querySelectorAll('.tecla');
const sounds = document.querySelectorAll('audio');

let i = 0;
while (i < buttons.length) {
    buttons[i].addEventListener('click', () => sounds[i].play());
    i++;
}
