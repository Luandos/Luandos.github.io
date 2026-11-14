let botao = document.getElementById('copiar-email');
botao.addEventListener('click', function(){
    // Lógica para copiar o e-mail
    let emailTexto = "luandosssantos9@gmail.com";
    navigator.clipboard.writeText(emailTexto)
    .then(function () {
      // 1. deu certo: mude o texto do botão para "Copiado!"
      botao.textContent = "Copiado!";
      // 2. agende a volta ao texto original com setTimeout (2 segundos)
      setTimeout(function () {
        botao.textContent = "Copiar Email";
      }, 2000);
    })
    .catch(function () {
      // deu erro: mostre uma mensagem ao usuário
      alert("Erro ao copiar o e-mail.");
    });
});

document.querySelectorAll('#projetos article').forEach(function (projeto) {
    projeto.addEventListener('mousemove', function (event) {
        let x = event.clientX - projeto.offsetLeft;
        let y = event.clientY - projeto.offsetTop;
        projeto.style.setProperty('--x', x + 'px');
        projeto.style.setProperty('--y', y + 'px');
    });
    card.getBoundingClientRect()
});
