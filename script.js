const botaoCalcular = document.getElementById("calcular");
const mensagem = document.getElementById("mensagem");

botaoCalcular.addEventListener("click", function () {
  // Ler os valores informados pelo usuário
  const L0 = Number(
    document.getElementById("comprimentoInicial").value
  );

  const T0 = Number(
    document.getElementById("temperaturaInicial").value
  );

  const Tf = Number(
    document.getElementById("temperaturaFinal").value
  );

  // Material selecionado
  const codigoMaterial =
    document.getElementById("material").value;

  const material = materiais[codigoMaterial];

  // Coeficiente do material selecionado
  const alpha = material.alpha;

  // Variação de temperatura
  const deltaT = Tf - T0;

  // Dilatação linear
  const deltaL = L0 * alpha * deltaT;

  // Comprimento final
  const Lf = L0 + deltaL;

  // Exibir os resultados
  mensagem.innerHTML = `
    <strong>Resultado da simulação</strong><br><br>

    Material: ${material.nome}<br>

    Comprimento inicial:
    ${L0.toFixed(6)} m<br>

    Variação de temperatura:
    ${deltaT.toFixed(2)} °C<br>

    Dilatação:
    ${deltaL.toFixed(6)} m<br>

    Comprimento final:
    ${Lf.toFixed(6)} m
  `;
});
