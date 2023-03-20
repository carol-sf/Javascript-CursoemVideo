var aux = 0;

function trocarTema() {
    var fundo = document.querySelector('body');
    var subtitulo = document.querySelector('.subtitulo');
    var titulo = document.querySelector('.titulo');
    var texto = document.querySelector('.texto');
    var btnTema = document.querySelector('#btnTema');

    aux++;
    if(aux == 1) {
        fundo.style.background = 'var(--escuro)';
        subtitulo.style.color = 'var(--colorido-escuro)';
        titulo.style.color = 'var(--claro)';
        texto.style.color = 'var(--claro)';
        btnTema.style.background = 'var(--colorido-escuro)';
        btnTema.innerHTML = 'Voltar para o modo claro';
    } else {
        fundo.style.background = 'var(--claro)';
        subtitulo.style.color = 'var(--colorido-claro)';
        titulo.style.color = 'var(--escuro)';
        texto.style.color = 'var(--escuro)';
        btnTema.style.background = 'var(--colorido-claro)';
        btnTema.innerHTML = 'Testar o modo escuro';
        aux = 0;
    }
}