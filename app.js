function criaCartao(categoria, pergunta, resposta) {
    let comntainer = document.getElementByld('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
}
cartao.innerHTML = `
<div class=" cartao_conteudo">
<h3>${categoria}</h3>
<div class="cartao_conteudo_pergunta">
<p>${pergunta}</p>
</div>
<div class="cartao_conteudo_resposta">
<p>${resposta}</p>
</div>
</div>
let respostaEstaVisivil = false
function viraCartao() {
    respostaEstaVisivil = !respostaEstaVisivil
    cartao.classList.toggle('active', respostaEstaVisivil)
}
cartao.addEventListener('click', viraCartao)
container.appendChild(cartao)