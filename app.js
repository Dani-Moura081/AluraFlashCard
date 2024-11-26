function criaCartao(categoria, pergunta, resposta) {
    
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
            <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta" style="display: none;">
            <p>${resposta}</p>
        </div>
    </div>
    `;

    let respostaEstaVisivel = false;

    
    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        
        // Exibir ou ocultar a resposta
        const respostaElemento = cartao.querySelector('.cartao__conteudo__resposta');
        if (respostaEstaVisivel) {
            respostaElemento.style.display = 'block'; // Exibi a resposta
            setTimeout(() => { // Atraso para permitir a transição
                respostaElemento.classList.add('active'); // Adiciona a classe para a animação
            }, 10); // tempo de atraso pro display da animação
        } else {
            respostaElemento.classList.remove('active'); // Remove a classe para a animação
            respostaElemento.addEventListener('transitionend', function handler() {
                respostaElemento.style.display = 'none'; // aqui oculta após a animação
                respostaElemento.removeEventListener('transitionend', handler); // Remove o listener
            });
        }
    }

    cartao.addEventListener('click', viraCartao);

    container.appendChild(cartao);

}