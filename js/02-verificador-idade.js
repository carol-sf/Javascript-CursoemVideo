function verificar() {
    var inpAno = document.querySelector('#inpAno');
    var divResp = document.querySelector('#divResp');
    var radSex = document.getElementsByName('radSex');

    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    if(inpAno.value == 0) {
        alert('Por favor, insira o ano de nascimento.');
        return;
    } else if(inpAno.value > anoAtual) {
        alert('Essa pessoa veio do futuro?? Por favor, verifique o ano de nascimento.')
        return;
    } else if(inpAno.value < 0) {
        alert('O ano de nascimento não pode ser negativo. Por favor, tente novamente.')
        return;
    } else {
        var idade = anoAtual - Number(inpAno.value);
        var genero = '';
        var imagem = document.createElement('img');
        imagem.setAttribute('class', 'img');

        if(radSex[0].checked) {
            genero = 'um homem';
            if(idade >= 0 && idade < 10) {
                genero = 'um menino';
                imagem.setAttribute('src', './img/homem-crianca.png');
            } else if(idade < 21) {
                imagem.setAttribute('src', './img/homem-jovem.png');
            } else if(idade < 50) {
                imagem.setAttribute('src', './img/homem-adulto.png');
            } else if(idade < 200) {
                genero = 'um senhor';
                imagem.setAttribute('src', './img/homem-idoso.png');
            } else {
                imagem.setAttribute('src', './img/caveira.png');
            }
        } else if(radSex[1].checked) {
            genero = 'uma mulher';
            if(idade >= 0 && idade < 10) {
                genero = 'uma menina';
                imagem.setAttribute('src', './img/mulher-crianca.png');
            } else if(idade < 21) {
                imagem.setAttribute('src', './img/mulher-jovem.png');
            } else if(idade < 50) {
                imagem.setAttribute('src', './img/mulher-adulto.png');
            } else if(idade < 200) {
                genero = 'uma senhora';
                imagem.setAttribute('src', './img/mulher-idoso.png');
            } else {
                imagem.setAttribute('src', './img/caveira.png');
            }
        }
        divResp.innerHTML = `<p class="subtitulo">Detectamos ${genero} de ${idade} anos<p>`;
        divResp.style.textAlign = 'center';
        divResp.appendChild(imagem);
    }
}