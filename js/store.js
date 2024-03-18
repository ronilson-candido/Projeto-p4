function landingScroll(target, duracao){
    var target = document.querySelector(target)
    let targetPosicao = target.getBoundingClientRect().top
    let pontoPartida = window.pageYOffset
    let distancia = targetPosicao - pontoPartida
    let comecoTempo = null

    function animacaoScroll(tempoAtual){
        if(comecoTempo = null) pontoPartida = tempoAtual
        let tempoDecorrido = tempoAtual - comecoTempo
        let comeco = ease(tempoDecorrido, pontoPartida, distancia, duracao)
        window.scrollTo(0,comeco)
        if(tempoDecorrido < duracao) requestAnimationFrame(animacaoScroll) 
    }

    function ease (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t*t + b;
        t -= 2;
        return -c/2 * (t*t*t*t - 2) + b;
    }
    requestAnimationFrame(animacaoScroll);
}

const btnLanding = document.querySelector('.smooth')
btnLanding.addEventListener('click', () => {
    landingScroll('#conteudo', 2600)
})
