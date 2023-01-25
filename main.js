// //MODO 1 - FOR(LOOP)
// const botao = document.querySelectorAll('.tecla');
// const som = document.querySelectorAll('audio');

// function tocaSom(e) {
//     som[e].play();
// }

// for (let e = 0; e < botao.length; e++) {
//     botao[e].onclick = () => tocaSom(e);
    
// }

// //MODO 2 - WHILE (necessário outra let dentro do while)
// let i = 0;
// const botao = document.querySelectorAll('.tecla');
// const som = document.querySelectorAll('audio');

// while (i < botao.length) {
//     let index = i;
//     botao[i].onclick = function(){
//         tocaSom(index);
//     }
//     i++
// }

// function tocaSom(i) {
//     som[i].play();
// }


// // MODO 3 FOREACH
// const buttons = document.querySelectorAll('.tecla');
// const sounds = document.querySelectorAll('audio');

// buttons.forEach((button, index) => {
//     button.addEventListener('click', () => sounds[index].play());
// });

//MODO 1 - FOR(LOOP) SEM TAG AUDIO (EVITAR PROBLEMAS FUTUROS)
const teclas = document.querySelectorAll('.tecla');

function tocaSom(e) {
    document.querySelector(e).play();
}

for (let c = 0; c < teclas.length; c++) {
    const tecla = teclas[c];
    const classTecla = tecla.classList[1]; //segunda classe na lista de classes
    const som = `#som_${classTecla}`;
    tecla.onclick = () => tocaSom(som);
    
    tecla.onkeydown = (evento) => {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }

    
}