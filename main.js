// const botao = document.querySelectorAll('.tecla');
// const som = document.querySelectorAll('audio');

// function tocaSom(e) {
//     som[e].play();
// }

// for (let e = 0; e < botao.length; e++) {
//     botao[e].onclick = () => tocaSom(e);
    
// }


let i = 0;
const botao = document.querySelectorAll('.tecla');
const som = document.querySelectorAll('audio');

while (i < botao.length) {
    let index = i;
    botao[i].onclick = function(){
        tocaSom(index);
    }
    i++
}

function tocaSom(i) {
    som[i].play();
}


// // MODO 2********************
// const buttons = document.querySelectorAll('.tecla');
// const sounds = document.querySelectorAll('audio');

// buttons.forEach((button, index) => {
//     button.addEventListener('click', () => sounds[index].play());
// });

