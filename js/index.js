function exibirInformacoes(pNumProjeto) {
    let divSaibaMais = document.querySelector(`#divSaibaMais${pNumProjeto}`);
    let btnProjeto = document.querySelector(`#btnProjeto${pNumProjeto}`);
    let info = "";

    if (btnProjeto.textContent == 'Saiba mais') {
        btnProjeto.textContent = "Mostrar Menos";
        switch (pNumProjeto) {
            case 1:
                info = textoProjeto1();
                break;
            case 2:
                info = textoProjeto2();
                break;
            case 3:
                info = textoProjeto3();
                break;
            case 4:
                info = textoProjeto4();
                break;
            case 5:
                info = textoProjeto5();
                break;
            case 6:
                info = textoProjeto6();
                break;
        }
        divSaibaMais.innerHTML = info;
    } else {
        btnProjeto.textContent = "Saiba mais"
        divSaibaMais.innerHTML = "";
    }
}

function textoProjeto1() {
    return `<h4>Sobre:</h4>
            <p>O site carrega com a hora atual, mudando o tema de acordo com ela. Também é possível mudar o tema
            apertando o último botão.</p>
            <h4>Aprendizado:</h4>
            <p>Trabalhamos com <strong>condições</strong> dentro do Js, manipulando os elementos do HTML e seu estilo de acordo com elas.</p>`;
}

function textoProjeto2() {
    return `<h4>Sobre:</h4>
            <p>A página informa a idade da pessoa de acordo com o ano de nascimento informado. Para ilustrar, também aparece uma foto condizente com a idade e o sexo.</p>
            <h4>Aprendizado</h4>
            <p>Também foram trabalhadas as condições, mas nesse projeto, em vez de manipular elementos já existentes no HTML, foi usado o js para criá-los.</p>`;
}

function textoProjeto3() {
    return `<h4>Sobre:</h4>
            <p>A página faz a contagem do número informado para o início até o número informado para o fim, pulando de acordo com o passo.</p>
            <h4>Aprendizado:</h4>
            <p>Foi trabalhada a estrutura de repetição, além dos conceitos aprendidos nos projetos anteriores. Nesse projeto também aprendi a usar comandos HTML para emojis e usei o mínimo de modularização ao fazer a validação em uma função diferente.</p>`;
}

function textoProjeto4() {
    return `<h4>Sobre:</h4>
            <p>O usuário escolhe o número e o tipo de tabuada, que é gerada ao apertar o botão.</p>
            <h4>Aprendizado:</h4>
            <p>Foram trabalhados diversos conseitos anteriores, mas principalmente as estruturas de repetição.</p>`;
}

function textoProjeto5() {
    return `<h4>Sobre:</h4>
            <p>O usuário insere quantos números quiser no vetor e quando clica em finalizar o site mostra a análize do vetor. Tem também a opção de limpar para começar o vetor do zero, pois se adicionar um novo número depois de finalizado, ele apenas adiciona o número no vetor já existente.</p>
            <h4>Aprendizado:</h4>
            <p>O conceito de função foi o mais trabalhado</p>`;
}

function textoProjeto6() {
    return `<h4>Sobre:</h4>
            <p>Algumas páginas simples que fiz para reforçar meu conhecimento e tirar algumas dúvidas</p>`;
}