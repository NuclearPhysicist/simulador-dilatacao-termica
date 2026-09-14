// ============================================================
// SIMULADOR DE DILATAÇÃO TÉRMICA
// ============================================================
//
// Modelo:
// ΔL = L₀ · α · ΔT
//
// Lf = L₀ + ΔL
//
// α = coeficiente de expansão linear médio
// ============================================================


// ============================================================
// FUNÇÃO PRINCIPAL
// ============================================================

function calcular() {

    // --------------------------------------------------------
    // 1. OBTÉM O MATERIAL SELECIONADO
    // --------------------------------------------------------

    const materialSelecionado =
        document.getElementById("material").value;

    const material = materiais[materialSelecionado];


    // --------------------------------------------------------
    // 2. OBTÉM OS DADOS INFORMADOS PELO USUÁRIO
    // --------------------------------------------------------

    const L0 =
        parseFloat(document.getElementById("comprimento").value);

    const Ti =
        parseFloat(document.getElementById("temperaturaInicial").value);

    const Tf =
        parseFloat(document.getElementById("temperaturaFinal").value);


    // --------------------------------------------------------
    // 3. VERIFICA SE OS DADOS SÃO VÁLIDOS
    // --------------------------------------------------------

    if (!material) {

        mostrarResultado(`
            <div class="aviso">
                <strong>Erro:</strong>
                selecione um material.
            </div>
        `);

        return;
    }


    if (isNaN(L0) || L0 <= 0) {

        mostrarResultado(`
            <div class="aviso">
                <strong>Erro:</strong>
                informe um comprimento inicial válido.
            </div>
        `);

        return;
    }


    if (isNaN(Ti) || isNaN(Tf)) {

        mostrarResultado(`
            <div class="aviso">
                <strong>Erro:</strong>
                informe as temperaturas inicial e final.
            </div>
        `);

        return;
    }


    // --------------------------------------------------------
    // 4. VERIFICA A FAIXA DE TEMPERATURA DOS DADOS
    // --------------------------------------------------------

    const Tmenor = Math.min(Ti, Tf);
    const Tmaior = Math.max(Ti, Tf);

    let avisoFaixa = "";


    if (Tmenor < material.Tmin || Tmaior > material.Tmax) {

        avisoFaixa = `
            <div class="aviso">
                <strong>⚠ Atenção: extrapolação dos dados</strong>

                <p>
                    Para o material
                    <strong>${material.nome}</strong>,
                    a faixa de temperatura indicada na tabela é:
                    <strong>${material.Tmin} °C a ${material.Tmax} °C</strong>.
                </p>

                <p>
                    O intervalo informado foi:
                    <strong>${Ti} °C → ${Tf} °C</strong>.
                </p>

                <p>
                    Portanto, este cálculo representa uma
                    <strong>extrapolação</strong> da faixa indicada
                    para o coeficiente de expansão.
                </p>
            </div>
        `;
    }


    // --------------------------------------------------------
    // 5. CALCULA A VARIAÇÃO DE TEMPERATURA
    // --------------------------------------------------------

    const deltaT = Tf - Ti;


    // --------------------------------------------------------
    // 6. CALCULA A VARIAÇÃO DE COMPRIMENTO
    // --------------------------------------------------------

    const deltaL =
        L0 * material.alpha * deltaT;


    // --------------------------------------------------------
    // 7. CALCULA O COMPRIMENTO FINAL
    // --------------------------------------------------------

    const Lf = L0 + deltaL;


    // --------------------------------------------------------
    // 8. MOSTRA OS RESULTADOS
    // --------------------------------------------------------

    mostrarResultado(`

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
                <strong>Comprimento inicial:</strong>
                ${L0.toFixed(6)} m
            </p>

            <p>
                <strong>Variação de comprimento:</strong>
                ${deltaL.toFixed(6)} m
            </p>

            <p>
                <strong>Comprimento final:</strong>
                ${Lf.toFixed(6)} m
            </p>

        </div>

    `);
}


// ============================================================
// FUNÇÃO PARA MOSTRAR O RESULTADO
// ============================================================

function mostrarResultado(conteudo) {

    document.getElementById("resultado").innerHTML = conteudo;
}


// ============================================================
// FORMATAÇÃO DO COEFICIENTE α
// ============================================================

function formatarAlpha(alpha) {

    return (alpha * 1e6).toFixed(2) + " × 10⁻⁶";
}
