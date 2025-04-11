/* 
Variaveis 
È um pedacinho de memoria do computadore que eu posso guarda o que eu quiser 

Funcao 
È um pedaciho de codigo que, so e executado quando eu chamo ela.

*/
function trocarCor(cor) {
    const imagemTenis = document.querySelector('.tenis-verde');

    if (cor === 'verde') {
        imagemTenis.src = 'Imagens/nike1.png';
    } else if (cor === 'rosa') {
        imagemTenis.src = 'Imagens/nike3.png';
    } else if (cor === 'azul') {
        imagemTenis.src = 'Imagens/nike2.png';
    }
}
function trocarCor(cor) {
    const imagemTenis = document.querySelector('.tenis-verde');
    const body = document.body;

    if (cor === 'verde') {
        imagemTenis.src = 'Imagens/nike1.png';
        body.style.background = '#ccee66';
    } else if (cor === 'rosa') {
        imagemTenis.src = 'Imagens/nike3.png';
        body.style.background = '#ff9eb5';
    } else if (cor === 'azul') {
        imagemTenis.src = 'Imagens/nike2.png';
        body.style.background = '#58cced';
    }
}
function trocarCor(cor) {
    const imagemTenis = document.querySelector('.tenis-verde');
    const body = document.body;
    const botaoCarrinho = document.querySelector('.botao-carrinho');

    // Troca de imagem e fundo
    if (cor === 'verde') {
        imagemTenis.src = 'Imagens/nike1.png';
        body.style.background = '#ccee66';
        botaoCarrinho.style.backgroundColor = '#a3be52';
    } else if (cor === 'rosa') {
        imagemTenis.src = 'Imagens/nike3.png';
        body.style.background = '#ff9eb5';
        botaoCarrinho.style.backgroundColor = '#e56d89';
    } else if (cor === 'azul') {
        imagemTenis.src = 'Imagens/nike2.png';
        body.style.background = '#58cced';
        botaoCarrinho.style.backgroundColor = '#36a2c9';
    }

    // Aplica animação de queda
    imagemTenis.classList.remove('tenis-animar'); // remove se já tiver
    void imagemTenis.offsetWidth; // força o reflow
    imagemTenis.classList.add('tenis-animar'); // adiciona de novo
}
function trocarCor(cor) {
    const imagemTenis = document.querySelector('.tenis-verde');
    const body = document.body;
    const botaoCarrinho = document.querySelector('.botao-carrinho');

    if (cor === 'verde') {
        imagemTenis.src = 'Imagens/nike1.png';
        body.style.background = '#ccee66';
        botaoCarrinho.style.backgroundColor = '#a3be52';
    } else if (cor === 'rosa') {
        imagemTenis.src = 'Imagens/nike2.png';
        body.style.background = '#ff9eb5';
        botaoCarrinho.style.backgroundColor = '#e56d89';
    } else if (cor === 'azul') {
        imagemTenis.src = 'Imagens/nike3.png';
        body.style.background = '#58cced';
        botaoCarrinho.style.backgroundColor = '#36a2c9';
    }

    // Reinicia a animação
    imagemTenis.classList.remove('tenis-animar');
    
    // Reforça o reflow
    void imagemTenis.offsetWidth;

    imagemTenis.classList.add('tenis-animar');
}