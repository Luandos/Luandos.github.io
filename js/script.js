let botao = document.getElementById('copiar-email');
botao.addEventListener('click', function(){
    let emailTexto = "luandosssantos9@gmail.com";
    navigator.clipboard.writeText(emailTexto)
    .then(function () {
      botao.textContent = "Copiado!";
      setTimeout(function () {
        botao.textContent = "Copiar Email";
      }, 2000);
    })
    .catch(function () {
      alert("Erro ao copiar o e-mail.");
    });
});

document.querySelectorAll('#projetos article').forEach(function (projeto) {
    projeto.addEventListener('mousemove', function (event) {
        let area = projeto.getBoundingClientRect();
        let x = event.clientX - area.left;
        let y = event.clientY - area.top;
        projeto.style.setProperty('--x', x + 'px');
        projeto.style.setProperty('--y', y + 'px');
    });
});
