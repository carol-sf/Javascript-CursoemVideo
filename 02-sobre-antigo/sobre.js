function exibirInformacoes(pNumProjeto) {
    let divConceitosPrincipais = document.querySelector(`#divConceitosPrincipais${pNumProjeto}`);
    let btnProposta = document.querySelector(`#btnProposta${pNumProjeto}`);
    let info = "";

    if (btnProposta.textContent.includes('Conceitos')) {
        btnProposta.textContent = "Mostrar Menos";
        switch (pNumProjeto) {
            case 1:
            case 2:
                info = conceitosProposta1();
                break;
            case 3:
            case 4:
                info = conceitosProposta3();
                break;
            case 5:
                info = conceitosProposta5();
                break;
        }
        divConceitosPrincipais.innerHTML = info;
        // trocarModo('Conceitos principais');
    } else {
        btnProposta.textContent = "Conceitos principais"
        divConceitosPrincipais.innerHTML = "";
    }
}

function conceitosProposta1() {
    return `<h4>Principal:</h4>
            <ul>
               <li><a href="https://youtu.be/mfHAQ-4Rspw">Condições (parte 1)</a></li>
                <li><a href="https://youtu.be/EEStcIe8rAM">Condições (parte 2)</a></li>
            </ul>
            <h4>Auxiliares:</h4>
            <ul>
                <li><a href="https://youtu.be/WWZX8RWLxIk">Introdução ao DOM</a></li>
                <li><a href="https://youtu.be/wWnBB-mZIvY">Eventos DOM</a></li>
            </ul>`;
}

function conceitosProposta3() {
    return `<h4>Principal:</h4>
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
}

function conceitosProposta5() {
    return `<h4>Principal:</h4>
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
}