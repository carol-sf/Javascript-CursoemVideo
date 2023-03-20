var imagem = document.querySelector('#imagem');
var btnAlterarTema = document.querySelector('#btnAlterarTema');
var msg = document.querySelector('#msg');
var tema = document.querySelector('#tema');
var menu = document.querySelector('#menu');
var rodape = document.querySelector('#rodape');

function carregar() {
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `<span>São <strong id="destaque">${hora} horas</strong>! </span>`;
    if(hora >= 0 && hora < 6) {
        msg.innerHTML += '<span>Boa madrugada!</span>';
        temaMadrugada();
    } else if(hora >= 6 && hora < 12) {
        msg.innerHTML += '<sapn>Bom dia!</span>';
        temaManha();
    } else if(hora >= 12 && hora < 18) {
        msg.innerHTML += '<sapn>Boa tarde!</span>';
        temaTarde();
    } else if(hora >= 18 && hora < 24) {
        msg.innerHTML += '<sapn>Boa noite!</span>';
        temaNoite();
    }
}

var aux = 0;
function alterarTema() {
    aux++;
    if(aux == 1) {
        temaMadrugada();
        tema.innerHTML = '- madrugada -';
    } else if(aux == 2) {
        temaManha();
        tema.innerHTML = '- manhã -';        
    } else if(aux == 3) {
        temaTarde();
        tema.innerHTML = '- tarde -';        
    } else if(aux == 4) {
        temaNoite();
        tema.innerHTML = '- noite -';        
    } else {
        aux = 0;
        alterarTema();
    }
}

function temaMadrugada() {
    imagem.src = './img/hora-madrugada.png';
    destaque.style.color = 'var(--madrugada-destaque)';
    btnAlterarTema.style.background = 'var(--madrugada-destaque)';
    document.body.style.background = 'var(--madrugada-fundo)';
}

function temaManha() {
    imagem.src = './img/hora-manha.png';
    destaque.style.color = 'var(--manha-destaque)';
    btnAlterarTema.style.background = 'var(--manha-destaque)';
    document.body.style.background = 'var(--manha-fundo)';
}

function temaTarde() {
    imagem.src = './img/hora-tarde.png';
    destaque.style.color = 'var(--tarde-fundo)';
    btnAlterarTema.style.background = 'var(--madrugada-fundo)';
    document.body.style.background = 'var(--tarde-fundo)';
}

function temaNoite() {
    imagem.src = './img/hora-noite.png';
    destaque.style.color = 'var(--tarde-fundo)';
    btnAlterarTema.style.background = 'var(--tarde-fundo)';
    document.body.style.background = 'var(--noite-fundo)';
}