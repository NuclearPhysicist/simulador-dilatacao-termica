// ============================================================
// SIMULADOR DE DILATAÇÃO TÉRMICA
// ============================================================

// ============================================================
// PREENCHE O MENU DE MATERIAIS AUTOMATICAMENTE
// ============================================================

function carregarMateriais() {

    const seletor = document.getElementById("material");

    // Limpa opções existentes
    seletor.innerHTML = "";

    // Percorre todos os materiais cadastrados
    Object.keys(materiais).forEach((codigo) => {

        const material = materiais[codigo];

        const opcao = document.createElement("option");

        opcao.value = codigo;

        opcao.textContent = material.nome;

        seletor.appendChild(opcao);

    });

}

function calcular() {

    // --------------------------------------------------------
    // LER OS VALORES DO HTML
    // --------------------------------------------------------

    const L0 = parseFloat(
        document.getElementById("comprimentoInicial").value
    );

    const Ti = parseFloat(
        document.getElementById("temperaturaInicial").value
    );

    const Tf = parseFloat(
        document.getElementById("temperaturaFinal").value
    );


    // --------------------------------------------------------
    // COEFICIENTE DO ALUMÍNIO
    // --------------------------------------------------------

    const alpha = 23.6e-6;


    // --------------------------------------------------------
    // CÁLCULO
    // --------------------------------------------------------

    const deltaT = Tf - Ti;

    const deltaL = L0 * alpha * deltaT;

    const Lf = L0 + deltaL;


    // --------------------------------------------------------
    // MOSTRAR RESULTADO
    // --------------------------------------------------------

    document.getElementById("mensagem").innerHTML = `

        <h3>Resultado</h3>

        <p>
            <strong>Material:</strong>
            Alumínio
        </p>

        <p>
            <strong>Coeficiente α:</strong>
            23,6 × 10⁻⁶ K⁻¹
        </p>

        <p>
            <strong>Comprimento inicial:</strong>
            ${L0.toFixed(6)} m
        </p>

        <p>
            <strong>Temperatura inicial:</strong>
            ${Ti.toFixed(2)} °C
        </p>

        <p>
            <strong>Temperatura final:</strong>
            ${Tf.toFixed(2)} °C
        </p>

        <p>
            <strong>Variação de temperatura:</strong>
            ${deltaT.toFixed(2)} °C
        </p>

        <hr>

        <p>
            <strong>Variação de comprimento:</strong>
            ${deltaL.toFixed(6)} m
        </p>

        <p>
            <strong>Comprimento final:</strong>
            ${Lf.toFixed(6)} m
        </p>
    `;
}

// ============================================================
// INICIALIZA O SIMULADOR
// ============================================================

window.onload = function () {

    carregarMateriais();

};
