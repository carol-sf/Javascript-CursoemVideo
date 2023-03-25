function exibirPerguntas() {
    let cmbAula = document.querySelector('#cmbAula');
    let divPerguntas = document.querySelector('#divPerguntas')

    let aulaSelecionada = cmbAula.options[cmbAula.selectedIndex].value;

    divPerguntas.innerHTML = '';
    let imgPerguntas = document.createElement('img');
    imgPerguntas.setAttribute('src', novaImagemPergunta(Number(aulaSelecionada)));
    divPerguntas.appendChild(imgPerguntas);

    let btnVerAula = document.createElement('a');
    btnVerAula.innerText = 'Ver aula';
    btnVerAula.setAttribute('href', novoLinkAula(Number(aulaSelecionada)));
    btnVerAula.setAttribute('class', 'btn btn-projeto btn-aula');
    divPerguntas.appendChild(btnVerAula);
}

function novaImagemPergunta(pAulaSelecionada) {
    switch (pAulaSelecionada) {
        case 1:
            return "./img/perguntas1.jpeg";
            break;
        case 2:
            return "./img/perguntas2.jpeg";
            break;
        case 3:
            return "./img/perguntas3.jpeg";
            break;
        case 4:
            return "./img/perguntas4.jpeg";
            break;
        case 5:
            return "./img/perguntas5.jpeg";
            break;
        case 6:
            return "./img/perguntas6.jpeg";
            break;
        case 7:
            return "./img/perguntas7.jpeg";
            break;
        case 8:
            return "./img/perguntas8.jpeg";
            break;
        case 9:
            return "./img/perguntas9.jpeg";
            break;
        case 10:
            return "./img/perguntas10.jpeg";
            break;
        case 11:
            return "./img/perguntas11.jpeg";
            break;
        case 12:
            return "./img/perguntas12.jpeg";
            break;
        case 13:
            return "./img/perguntas13.jpeg";
            break;
        case 14:
            return "./img/perguntas14.jpeg";
            break;
        case 15:
            return "./img/perguntas15.jpeg";
            break;
    }
}

function novoLinkAula(pAulaSelecionada) {
    switch (pAulaSelecionada) {
        case 1:
            return "https://youtu.be/Ptbk2af68e8";
            break;
        case 2:
            return "https://youtu.be/rUTKomc2gG8";
            break;
        case 3:
            return "https://youtu.be/FdePtO5JSd0";
            break;
        case 4:
            return "https://youtu.be/FdePtO5JSd0";
            break;
        case 5:
            return "https://youtu.be/Vbabsye7mWo";
            break;
        case 6:
            return "https://youtu.be/OJgu_KCCUSY";
            break;
        case 7:
            return "https://youtu.be/OJgu_KCCUSY";
            break;
        case 8:
            return "https://youtu.be/BP63NhITvao";
            break;
        case 9:
            return "https://youtu.be/WWZX8RWLxIk";
            break;
        case 10:
            return "https://youtu.be/wWnBB-mZIvY";
            break;
        case 11:
            return "https://youtu.be/cOdG4eACN2A";
            break;
        case 12:
            return "https://youtu.be/EEStcIe8rAM";
            break;
        case 13:
            return "https://youtu.be/EEStcIe8rAM";
            break;
        case 14:
            return "https://youtu.be/eX-lkN_Zahc";
            break;
        case 15:
            return "https://youtu.be/XdkW62tkAgU";
            break;
    }
}



let aux = -1;

function passar() {
    let tituloProjeto = document.querySelector('#tituloProjeto');
    let imgProjeto = document.querySelector('#imgProjeto');
    let divInfo = document.querySelector('#divInfo');

    aux++;
    vetCircular();

    tituloProjeto.innerHTML = novoTitulo();
    tituloProjeto.href = novoLink();
    imgProjeto.src = novaImagem();
    divInfo.innerHTML = novaInfo();
    limpaConceitosImportantes();
}

function voltar() {
    let tituloProjeto = document.querySelector('#tituloProjeto');
    let imgProjeto = document.querySelector('#imgProjeto');
    let divInfo = document.querySelector('#divInfo');

    aux--;
    vetCircular();

    tituloProjeto.innerHTML = novoTitulo();
    tituloProjeto.href = novoLink();
    imgProjeto.src = novaImagem();
    divInfo.innerHTML = novaInfo();
    limpaConceitosImportantes();
}

function vetCircular() {
    if (aux == -1) {
        aux = 5;
    } else if (aux == 6) {
        aux = 0;
    }
}

function novoTitulo() {
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
                    <a href="${novoLinkSolucao()}" id="btnVerResolucao">Ver resolução</a>
                </button>
                <button class="btn btn-projeto btnProposta" onclick="exibirInformacoes()">Conceitos principais</button>`;
    }
}

function novoLinkSolucao() {
    switch (aux) {
        case 1:
            return "https://youtu.be/UXSWgnbSHxs";
            break;
        case 2:
            return "https://youtu.be/f5es-PpaUI8";
            break;
        case 3:
            return "https://youtu.be/oMNbc_LFz8w?t=102";
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
    if (aux != 0) {
        divConceitosImportantes.innerHTML = conteudo;
    }
}

function limpaConceitosImportantes() {
    let divConceitosImportantes = document.querySelector('#divConceitosImportantes');
    divConceitosImportantes.innerHTML = `<p class="informacoes-iniciais">&#x1F973 Se você <strong>conseguiu</strong> fazer todos eles sem ver a resolução, parabéns! Você já sabe o que o curso se propôs a ensinar. Mas mesmo que você tenha conseguido implementar, eu recomento dar uma olhada nas resoluções para ver se o seu código pode ser simplificado de alguma maneira.</p>
    <br>
    <p>&#x1F914 Se você <strong>não conseguiu</strong> implementar algumas funcionalidades, tente ver o vídeo sobre o conceito principal trabalhado. Você também pode proucurar suas dúvidas na lista de perguntas mais em baixo, se ela estiver lá é só clicar na imagem que você será encaminhado para o vídeo referente.</p>`;

    divConceitosImportantes.classList.remove('divConceitosImportantes');
}