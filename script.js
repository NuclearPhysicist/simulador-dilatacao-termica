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


// ============================================================
// FUNÇÃO PRINCIPAL DE CÁLCULO
// ============================================================

function calcular() {

    // --------------------------------------------------------
    // MATERIAL ESCOLHIDO
    // --------------------------------------------------------

    const codigoMaterial =
        document.getElementById("material").value;

    const material =
        materiais[codigoMaterial];


    // --------------------------------------------------------
    // ELEMENTO ONDE O RESULTADO SERÁ MOSTRADO
    // --------------------------------------------------------

    const mensagem =
        document.getElementById("mensagem");


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
    // VERIFICAÇÃO DO MATERIAL
    // --------------------------------------------------------

    if (!material) {

        mensagem.innerHTML = `
            <strong>Erro:</strong>
            material não encontrado.
        `;

        return;
    }


    // --------------------------------------------------------
    // VERIFICAÇÃO DO COMPRIMENTO
    // --------------------------------------------------------

    if (isNaN(L0) || L0 <= 0) {

        mensagem.innerHTML = `
            <strong>Erro:</strong>
            informe um comprimento inicial
            maior que zero.
        `;

        return;
    }


    // --------------------------------------------------------
    // VERIFICAÇÃO DAS TEMPERATURAS
    // --------------------------------------------------------

    if (isNaN(Ti) || isNaN(Tf)) {

        mensagem.innerHTML = `
            <strong>Erro:</strong>
            informe as temperaturas
            inicial e final.
        `;

        return;
    }


    // --------------------------------------------------------
    // COEFICIENTE DE EXPANSÃO DO MATERIAL
    // --------------------------------------------------------

    const alpha = material.alpha;


    // --------------------------------------------------------
    // VERIFICAÇÃO DA FAIXA DE TEMPERATURA
    // --------------------------------------------------------

    const Tmenor = Math.min(Ti, Tf);

    const Tmaior = Math.max(Ti, Tf);

    let aviso = "";


    if (
        Tmenor < material.Tmin ||
        Tmaior > material.Tmax
    ) {

        aviso = `
            <div class="aviso-faixa">

                <strong>
                    ⚠ Atenção: extrapolação dos dados
                </strong>

                <p>
                    Para o material
                    <strong>${material.nome}</strong>,
                    a faixa indicada dos dados é:
                    <strong>
                        ${material.Tmin} °C
                        a
                        ${material.Tmax} °C
                    </strong>.
                </p>

                <p>
                    O intervalo informado foi:
                    <strong>
                        ${Ti} °C → ${Tf} °C
                    </strong>.
                </p>

                <p>
                    O cálculo será realizado, mas o resultado
                    representa uma extrapolação da faixa indicada.
                </p>

            </div>
        `;
    }


    // --------------------------------------------------------
    // VARIAÇÃO DE TEMPERATURA
    // --------------------------------------------------------

    const deltaT = Tf - Ti;


    // --------------------------------------------------------
    // VARIAÇÃO DE COMPRIMENTO
    // --------------------------------------------------------

    const deltaL =
        L0 * alpha * deltaT;


    // --------------------------------------------------------
    // COMPRIMENTO FINAL
    // --------------------------------------------------------

    const Lf =
        L0 + deltaL;


    // --------------------------------------------------------
    // MOSTRAR RESULTADO
    // --------------------------------------------------------

    mensagem.innerHTML = `

        ${aviso}

        <h3>Resultado</h3>

        <p>
            <strong>Material:</strong>
            ${material.nome}
        </p>

        <p>
            <strong>Símbolo químico:</strong>
            ${material.simbolo}
        </p>

        <p>
            <strong>Categoria:</strong>
            ${material.categoria}
        </p>

        <p>
            <strong>Coeficiente α:</strong>
            ${formatarAlpha(alpha)} K⁻¹
        </p>

        <p>
            <strong>Faixa dos dados:</strong>
            ${material.Tmin} °C até ${material.Tmax} °C
        </p>

        <hr>

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
// FORMATAÇÃO DO COEFICIENTE α
// ============================================================

function formatarAlpha(alpha) {

    return (
        (alpha * 1e6).toFixed(2)
        + " × 10⁻⁶"
    );

}


// ============================================================
// INICIALIZA O SIMULADOR
// ============================================================

window.onload = function () {

    carregarMateriais();

};
