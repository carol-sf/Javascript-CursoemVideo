let aux = -1;

function passar() {
    let tituloProjeto = document.querySelector('#tituloProjeto');
    let imgProjeto = document.querySelector('#imgProjeto');
    let divInfo = document.querySelector('#divInfo');
    let btnVerResolucao = document.querySelector('#btnVerResolucao');
    let btnProposta = document.querySelector('.btnProposta');

    aux++;
    tituloProjeto.innerHTML = novoTitulo();
    tituloProjeto.href = novoLink();
    imgProjeto.src = novaImagem();

    divInfo.innerHTML = novaInfo();
    btnVerResolucao.href = novoLinkSolucao();
    btnProposta.setAttribute('id', `btnProposta${aux}`);

    limpaConceitosImportantes();
}

function voltar() {
    let tituloProjeto = document.querySelector('#tituloProjeto');
    let imgProjeto = document.querySelector('#imgProjeto');
    let divInfo = document.querySelector('#divInfo');

    aux--;
    tituloProjeto.innerHTML = novoTitulo();
    tituloProjeto.href = novoLink();
    imgProjeto.src = novaImagem();
    divInfo.innerHTML = novaInfo();
}

function novoTitulo() {
    if (aux == -1) {
        aux = 5;
    } else if (aux == 6) {
        aux = 0;
    }
    switch (aux) {
        case 0:
            return "Modelo";
            break;
        case 1:
            return "Proposta 1 - Hora do dia";
            break;
        case 2:
            return "Proposta 2 - Verificador de Idade";
            break;
        case 3:
            return "Proposta 3 - Contador";
            break;
        case 4:
            return "Proposta 4 - Tabuadar";
            break;
        case 5:
            return "Proposta 5 - Analizador de Números";
            break;
    }
}

function novoLink() {
    if (aux == -1) {
        aux = 5;
    } else if (aux == 6) {
        aux = 0;
    }
    switch (aux) {
        case 0:
            return "https://youtu.be/b2K7eo5Jdj8?t=218";
            break;
        case 1:
            return "https://youtu.be/b2K7eo5Jdj8?t=28";
            break;
        case 2:
            return "https://youtu.be/b2K7eo5Jdj8?t=77";
            break;
        case 3:
            return "https://youtu.be/6tyHypeY4-8?t=293";
            break;
        case 4:
            return "https://youtu.be/6tyHypeY4-8?t=390";
            break;
        case 5:
            return "https://youtu.be/vEOEZ03ZyiE?t=162";
            break;
    }
}

function novaImagem() {
    if (aux == -1) {
        aux = 5;
    } else if (aux == 6) {
        aux = 0;
    }
    switch (aux) {
        case 0:
            return "./img/propostas-modelo.png";
            break;
        case 1:
            return "./img/proposta1.png";
            break;
        case 2:
            return "./img/proposta2.png";
            break;
        case 3:
            return "./img/proposta3.png";
            break;
        case 4:
            return "./img/proposta4.png";
            break;
        case 5:
            return "./img/proposta5.png";
            break;
    }
}

function novaInfo() {
    if (aux == 0) {
        return `<p class="info-modelo">Nesse vídeo, o professor monta um modelo de site para servir de base para
                todos os exercícios, você pode fazer como ele ou tentar fazer no seu próprio estilo.</p>`;
    } else if (aux == 5) {
        return `<div class="botoes-proposta5">
                    <button class="btn btn-projeto">
                        <a href="https://youtu.be/vEOEZ03ZyiE?t=338" id="btnVerResolucao">Resolução (pt 1)</a>
                    </button>
                    <button class="btn btn-projeto">
                        <a href="https://youtu.be/slLoLLCd-k08" id="btnVerResolucao">Resolução (p 2)</a>
                    </button>
                </div>
                <button class="btn btn-projeto btnProposta" onclick="exibirInformacoes()">Conceitos principais</button>`;
    } else {
        return `<button class="btn btn-projeto">
                    <a href="" id="btnVerResolucao">Ver resolução</a>
                </button>
                <button class="btn btn-projeto btnProposta" onclick="exibirInformacoes()">Conceitos principais</button>`;
    }
}

function novoLinkSolucao() {
    if (aux == -1) {
        aux = 5;
    } else if (aux == 6) {
        aux = 0;
    }
    switch (aux) {
        case 1:
            return "https://youtu.be/UXSWgnbSHxs";
            break;
        case 2:
            return "https://youtu.be/f5es-PpaUI8";
            break;
        case 3:
            return "https://youtu.be/6tyHypeY4-8";
            break;
        case 4:
            return "https://youtu.be/mfHAQ-4Rspw";
            break;
    }
}

function exibirInformacoes() {
    let divConceitosImportantes = document.querySelector('#divConceitosImportantes');
    let conteudo = "";

    divConceitosImportantes.setAttribute('class', 'divConceitosImportantes');

    if (aux == -1) {
        aux = 5;
    } else if (aux == 6) {
        aux = 0;
    }
    switch (aux) {
        case 1:
        case 2:
            conteudo = `<h3>Conceitos importantes</h3>
                        <h4>Principal:</h4>
                        <ul>
                        <li><a href="https://youtu.be/mfHAQ-4Rspw">Condições (parte 1)</a></li>
                            <li><a href="https://youtu.be/EEStcIe8rAM">Condições (parte 2)</a></li>
                        </ul>
                        <h4>Auxiliares:</h4>
                        <ul>
                            <li><a href="https://youtu.be/WWZX8RWLxIk">Introdução ao DOM</a></li>
                            <li><a href="https://youtu.be/wWnBB-mZIvY">Eventos DOM</a></li>
                        </ul>`;
            break;
        case 3:
        case 4:
            conteudo = `<h3>Conceitos importantes</h3>
                        <h4>Principal:</h4>
                        <ul>
                            <li><a href="https://youtu.be/5rZqYPKIwkY">Repetições (parte 1)</a></li>
                            <li><a href="https://youtu.be/eX-lkN_Zahc">Repetições (parte 2)</a></li>
                        </ul>
                        <h4>Auxiliares:</h4>
                        <ul>
                            <li><a href="https://youtu.be/mfHAQ-4Rspw">Condições (parte 1)</a></li>
                            <li><a href="https://youtu.be/EEStcIe8rAM">Condições (parte 2)</a></li>
                            <li><a href="https://youtu.be/WWZX8RWLxIk">Introdução ao DOM</a></li>
                            <li><a href="https://youtu.be/wWnBB-mZIvY">Eventos DOM</a></li>
                        </ul>`;
            break;
        case 5:
            conteudo = `<h3>Conceitos importantes</h3>
                        <h4>Principal:</h4>
                        <ul>
                            <li><a href="https://youtu.be/XdkW62tkAgU">Vetores (parte 1)</a></li>
                            <li><a href="hhttps://youtu.be/mc3TKp2XzhI">Funções (parte 2)</a></li>
                        </ul>
                        <h4>Auxiliares:</h4>
                        <ul>
                            <li><a href="https://youtu.be/5rZqYPKIwkY">Repetições (parte 1)</a></li>
                            <li><a href="https://youtu.be/eX-lkN_Zahc">Repetições (parte 2)</a></li>
                            <li><a href="https://youtu.be/mfHAQ-4Rspw">Condições (parte 1)</a></li>
                            <li><a href="https://youtu.be/EEStcIe8rAM">Condições (parte 2)</a></li>
                            <li><a href="https://youtu.be/WWZX8RWLxIk">Introdução ao DOM</a></li>
                            <li><a href="https://youtu.be/wWnBB-mZIvY">Eventos DOM</a></li>
                        </ul>`;
            break;
    }
    if(aux != 0) {
        divConceitosImportantes.innerHTML = conteudo;
    }
}

function limpaConceitosImportantes() {
    let divConceitosImportantes = document.querySelector('#divConceitosImportantes');
    divConceitosImportantes.innerHTML = `<p>&#x1F973 Se você <strong>conseguiu</strong> fazer todos eles sem ver a resolução, parabéns! Você já sabe o que o curso se propôs a ensinar. Mas mesmo que você tenha conseguido implementar, eu recomento dar uma olhada nas resoluções para ver se o seu código pode ser simplificado de alguma maneira.</p>
    <br>
    <p>&#x1F914 Se você <strong>não conseguiu</strong> implementar algumas funcionalidades, tente ver o vídeo sobre o conceito principal trabalhado. Você também pode proucurar suas dúvidas na lista de perguntas mais em baixo, se ela estiver lá é só clicar na imagem que você será encaminhado para o vídeo referente.</p>`;

    divConceitosImportantes.classList.remove('divConceitosImportantes');
}