let aux = 0;
function trocarModo(pBotao) {
    let fundo = document.querySelector('body');
    let texto = document.querySelectorAll('h1, h3, p');
    let subtitulo = document.querySelectorAll('.subtitulo');
    let btn = document.querySelectorAll('.btn');
    let projeto = document.querySelectorAll('.projeto');
    let tituloSaibaMais = document.querySelectorAll('h4');

    if(pBotao == 'saiba-mais') {
        if(aux == 1) {
            //MODO ESCURO
            texto.forEach(e => {
                e.style.color = 'var(--claro)';
            });
            tituloSaibaMais.forEach(e => {
                e.style.color = 'var(--colorido-escuro)';
            });
        }
        return;
    }    

    aux++;
    if(aux == 1) {
        //MODO ESCURO
        fundo.style.background = 'var(--escuro)';
        texto.forEach(e => {
            e.style.color = 'var(--claro)';
        });
        subtitulo.forEach(e => {
            e.style.color = 'var(--colorido-escuro)';
        })
        btn.forEach(e => {
            e.style.background = 'var(--colorido-escuro)';
        })
        projeto.forEach(e => {
            e.style.background = 'var(--fundo-div-escuro)';
        })
    } else {
        //MODO CLARO
        fundo.style.background = 'var(--claro)';
        texto.forEach(element => {
            element.style.color = 'var(--escuro)';
        });
        subtitulo.forEach(e => {
            e.style.color = 'var(--colorido-claro)';
        })
        btn.forEach(e => {
            e.style.background = 'var(--colorido-claro)';
        })
        projeto.forEach(e => {
            e.style.background = 'var(--fundo-div-claro)';
        })
        aux = 0;
    }
}