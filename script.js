// ============================================================
// SIMULADOR DE DILATAÇÃO TÉRMICA
// ============================================================
//
// Modelo linear:
//
// ΔL = L₀ · α · ΔT
//
// Lf = L₀ + ΔL
//
// ============================================================


// ============================================================
// FUNÇÃO PRINCIPAL
// ============================================================

function calcular() {

    // --------------------------------------------------------
    // 1. MATERIAL
    // --------------------------------------------------------

    const codigoMaterial =
        document.getElementById("material").value;

    const material =
        materiais[codigoMaterial];


    // --------------------------------------------------------
    // 2. DADOS DE ENTRADA
    // --------------------------------------------------------

    const L0 =
        parseFloat(
            document.getElementById("comprimentoInicial").value
        );

    const Ti =
        parseFloat(
            document.getElementById("temperaturaInicial").value
        );

    const Tf =
        parseFloat(
            document.getElementById("temperaturaFinal").value
        );


    // --------------------------------------------------------
    // 3. ELEMENTO ONDE O RESULTADO SERÁ MOSTRADO
    // --------------------------------------------------------

    const mensagem =
        document.getElementById("mensagem");


    // --------------------------------------------------------
    // 4. VERIFICAÇÃO DO MATERIAL
    // --------------------------------------------------------

    if (!material) {

        mensagem.innerHTML = `
            <strong>Erro:</strong>
            material não encontrado.
        `;

        return;
    }


    // --------------------------------------------------------
    // 5. VERIFICAÇÃO DO COMPRIMENTO
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
    // 6. VERIFICAÇÃO DAS TEMPERATURAS
    // --------------------------------------------------------

    if (isNaN(Ti) || isNaN(Tf)) {

        mensagem.innerHTML = `
            <strong>Erro:</strong>
            informe as temperaturas inicial
            e final.
        `;

        return;
    }


    // --------------------------------------------------------
    // 7. VERIFICAÇÃO DA FAIXA DE TEMPERATURA
    // --------------------------------------------------------

    const Tmenor = Math.min(Ti, Tf);
    const Tmaior = Math.max(Ti, Tf);

    let avisoFaixa = "";


    if (
        Tmenor < material.Tmin ||
        Tmaior > material.Tmax
    ) {

        avisoFaixa = `
            <div class="aviso">

                <strong>
                    ⚠ Atenção: extrapolação dos dados
                </strong>

                <p>
                    Os dados de
                    <strong>${material.nome}</strong>
                    estão associados à faixa de
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
                    O cálculo será realizado, mas representa
                    uma <strong>extrapolação</strong> da faixa
                    indicada para os dados.
                </p>

            </div>
        `;
    }


    // --------------------------------------------------------
    // 8. VARIAÇÃO DE TEMPERATURA
    // --------------------------------------------------------

    const deltaT = Tf - Ti;


    // --------------------------------------------------------
    // 9. VARIAÇÃO DE COMPRIMENTO
    // --------------------------------------------------------

    const deltaL =
        L0 * material.alpha * deltaT;


    // --------------------------------------------------------
    // 10. COMPRIMENTO FINAL
    // --------------------------------------------------------

    const Lf =
        L0 + deltaL;


    // --------------------------------------------------------
    // 11. MOSTRA O RESULTADO
    // --------------------------------------------------------

    mensagem.innerHTML = `

        ${avisoFaixa}

        <div class="resultado-calculo">

            <h3>Resultado</h3>

            <p>
                <strong>Material:</strong>
                ${material.nome}
            </p>

            <p>
                <strong>Coeficiente de expansão linear:</strong>
                ${formatarAlpha(material.alpha)}
                K⁻¹
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

        </div>
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
// CONECTA O BOTÃO À FUNÇÃO CALCULAR
// ============================================================

document
    .getElementById("calcular")
    .addEventListener("click", calcular);
