const botaoCalcular = document.getElementById("calcular");

const mensagem = document.getElementById("mensagem");

botaoCalcular.addEventListener("click", function () {
  mensagem.textContent =
    "O botão está funcionando. Os cálculos serão adicionados na próxima etapa.";
});
