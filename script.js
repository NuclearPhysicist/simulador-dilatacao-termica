// ============================================================
// SIMULADOR DE DILATAÇÃO TÉRMICA
// Papadakis (1972)
// ============================================================


// ============================================================
// ELEMENTOS DA INTERFACE
// ============================================================

const materialSelect =
    document.getElementById("material");

const comprimentoInicialInput =
    document.getElementById("comprimentoInicial");

const temperaturaInicialInput =
    document.getElementById("temperaturaInicial");

const temperaturaFinalInput =
    document.getElementById("temperaturaFinal");

const calcularButton =
    document.getElementById("calcular");

const referenciaMaterial =
    document.getElementById("referenciaMaterial");

const tminMaterial =
    document.getElementById("tminMaterial");

const tmaxMaterial =
    document.getElementById("tmaxMaterial");

const rhoMaterial =
    document.getElementById("rhoMaterial");

const b0Material =
    document.getElementById("b0Material");

const b1Material =
    document.getElementById("b1Material");

const b2Material =
    document.getElementById("b2Material");

const mensagem =
    document.getElementById("mensagem");

const resultadoCalculo =
    document.getElementById("resultadoCalculo");

const alphaResultado =
    document.getElementById("alphaResultado");

const deltaTResultado =
    document.getElementById("deltaTResultado");

const dilatacaoRelativaResultado =
    document.getElementById("dilatacaoRelativaResultado");

const dilatacaoPercentualResultado =
    document.getElementById("dilatacaoPercentualResultado");

const deltaLResultado =
    document.getElementById("deltaLResultado");

const comprimentoFinalResultado =
    document.getElementById("comprimentoFinalResultado");

const equacao =
    document.getElementById("equacao");

const alerta =
    document.getElementById("alerta");


// ============================================================
// FORMATAÇÃO DE NÚMEROS
// ============================================================

function formatarNumero(valor, casas = 6) {

    if (!Number.isFinite(valor)) {
        return "—";
    }

    return valor.toLocaleString("pt-BR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: casas
    });
}


// ============================================================
// DILATAÇÃO RELATIVA
//
// ε(T) = B0 × 10⁻³
//      + B1 × 10⁻⁶ T
//      + B2 × 10⁻⁹ T²
// ============================================================

function calcularDilatacaoRelativa(material, T) {

    return (
        material.B0 * 1e-3 +
        material.B1 * 1e-6 * T +
        material.B2 * 1e-9 * T * T
    );
}


// ============================================================
// FATOR DE COMPRIMENTO
// ============================================================

function calcularFatorComprimento(material, T) {

    return 1 +
        calcularDilatacaoRelativa(material, T);
}


// ============================================================
// COMPRIMENTO EM UMA TEMPERATURA
//
// O comprimento inicial informado pelo usuário é o comprimento
// na temperatura inicial Ti.
//
// L(T) = Li × [1 + ε(T)] / [1 + ε(Ti)]
// ============================================================

function calcularComprimentoNaTemperatura(
    material,
    comprimentoInicial,
    temperaturaInicial,
    temperatura
) {

    const fatorInicial =
        calcularFatorComprimento(
            material,
            temperaturaInicial
        );

    const fatorTemperatura =
        calcularFatorComprimento(
            material,
            temperatura
        );

    return comprimentoInicial *
        fatorTemperatura /
        fatorInicial;
}


// ============================================================
// COEFICIENTE DE EXPANSÃO LINEAR
//
// α(T) = (1/L) × dL/dT
//
// Resultado interno em K⁻¹
// ============================================================

function calcularCoeficienteLinear(material, T) {

    const numerador =
        material.B1 * 1e-6 +
        2 * material.B2 * 1e-9 * T;

    const denominador =
        1 +
        material.B0 * 1e-3 +
        material.B1 * 1e-6 * T +
        material.B2 * 1e-9 * T * T;

    return numerador / denominador;
}


// ============================================================
// PREENCHER LISTA DE MATERIAIS
// ============================================================

function preencherMateriais() {

    materialSelect.innerHTML = "";

    for (const id in materiais) {

        const material =
            materiais[id];

        const option =
            document.createElement("option");

        option.value = id;

        option.textContent =
            `${material.nome} (${material.simbolo})`;

        materialSelect.appendChild(option);
    }

    atualizarDadosMaterial();
}


// ============================================================
// ATUALIZAR DADOS DO MATERIAL
// ============================================================

function atualizarDadosMaterial() {

    const id =
        materialSelect.value;

    const material =
        materiais[id];

    if (!material) {
        return;
    }

    referenciaMaterial.textContent =
        material.referencia || "Papadakis (1972)";

    tminMaterial.textContent =
        `${material.Tmin} °C`;

    tmaxMaterial.textContent =
        `${material.Tmax} °C`;

    rhoMaterial.textContent =
        material.rho !== undefined
            ? `${material.rho} g/cm³`
            : "—";

    b0Material.textContent =
        material.B0;

    b1Material.textContent =
        material.B1;

    b2Material.textContent =
        material.B2;

    // --------------------------------------------------------
    // Limites de temperatura
    // --------------------------------------------------------

    temperaturaInicialInput.min =
        material.Tmin;

    temperaturaFinalInput.min =
        material.Tmin;

    temperaturaInicialInput.max =
        material.Tmax;

    temperaturaFinalInput.max =
        material.Tmax;
}


// ============================================================
// VALIDAR TEMPERATURAS
// ============================================================

function validarTemperaturas(
    material,
    Ti,
    Tf
) {

    alerta.hidden = true;
    alerta.innerHTML = "";

    let valido = true;

    if (Ti < material.Tmin || Ti > material.Tmax) {

        alerta.hidden = false;

        alerta.innerHTML += `
            <strong>Temperatura inicial fora da faixa.</strong>
            <br>
            Para ${material.nome}, o intervalo informado por
            Papadakis é de ${material.Tmin} °C a
            ${material.Tmax} °C.
        `;

        valido = false;
    }

    if (Tf < material.Tmin || Tf > material.Tmax) {

        alerta.hidden = false;

        alerta.innerHTML += `
            <br><br>
            <strong>Temperatura final fora da faixa.</strong>
            <br>
            Para ${material.nome}, o intervalo informado por
            Papadakis é de ${material.Tmin} °C a
            ${material.Tmax} °C.
        `;

        valido = false;
    }

    return valido;
}


// ============================================================
// CALCULAR SIMULAÇÃO
// ============================================================

function calcular() {

    const id =
        materialSelect.value;

    const material =
        materiais[id];

    if (!material) {

        console.error(
            "Material não encontrado."
        );

        return;
    }


    // --------------------------------------------------------
    // ENTRADAS
    // --------------------------------------------------------

    const comprimentoInicial =
        parseFloat(
            comprimentoInicialInput.value
        );

    const Ti =
        parseFloat(
            temperaturaInicialInput.value
        );

    const Tf =
        parseFloat(
            temperaturaFinalInput.value
        );


    // --------------------------------------------------------
    // VALIDAÇÃO DOS VALORES
    // --------------------------------------------------------

    if (
        !Number.isFinite(comprimentoInicial) ||
        comprimentoInicial <= 0
    ) {

        alerta.hidden = false;

        alerta.innerHTML = `
            <strong>Comprimento inválido.</strong>
            Informe um comprimento maior que zero.
        `;

        return;
    }


    if (
        !Number.isFinite(Ti) ||
        !Number.isFinite(Tf)
    ) {

        alerta.hidden = false;

        alerta.innerHTML = `
            <strong>Temperatura inválida.</strong>
            Informe valores numéricos para as temperaturas.
        `;

        return;
    }


    // --------------------------------------------------------
    // VALIDAR FAIXA DO MATERIAL
    // --------------------------------------------------------

    if (!validarTemperaturas(material, Ti, Tf)) {

        resultadoCalculo.hidden = true;
        equacao.hidden = true;

        return;
    }


    // --------------------------------------------------------
    // VARIAÇÃO DE TEMPERATURA
    // --------------------------------------------------------

    const deltaT =
        Tf - Ti;


    // --------------------------------------------------------
    // COMPRIMENTOS
    // --------------------------------------------------------

    const comprimentoFinal =
        calcularComprimentoNaTemperatura(
            material,
            comprimentoInicial,
            Ti,
            Tf
        );


    const deltaL =
        comprimentoFinal -
        comprimentoInicial;


    // --------------------------------------------------------
    // DILATAÇÃO RELATIVA
    // --------------------------------------------------------

    const dilatacaoRelativa =
        deltaL /
        comprimentoInicial;


    const dilatacaoPercentual =
        dilatacaoRelativa * 100;


    // --------------------------------------------------------
    // COEFICIENTE α
    //
    // Como α depende da temperatura, usamos a temperatura
    // média do intervalo para representar o resultado.
    // --------------------------------------------------------

    const temperaturaMedia =
        (Ti + Tf) / 2;


    const alpha =
        calcularCoeficienteLinear(
            material,
            temperaturaMedia
        );


    // Conversão SOMENTE para apresentação:
    //
    // K⁻¹ → ×10⁻⁶ K⁻¹

    const alphaMicro =
        alpha * 1e6;


    // ========================================================
    // EXIBIR RESULTADOS
    // ========================================================

    mensagem.innerHTML = `
        <p>
            Resultado da simulação para
            <strong>${material.nome}</strong>.
        </p>
    `;


    // --------------------------------------------------------
    // α
    // --------------------------------------------------------

    alphaResultado.textContent =
        `${formatarNumero(alphaMicro, 4)} × 10⁻⁶`;


    // --------------------------------------------------------
    // ΔT
    // --------------------------------------------------------

    deltaTResultado.textContent =
        formatarNumero(deltaT, 2);


    // --------------------------------------------------------
    // DILATAÇÃO RELATIVA
    // --------------------------------------------------------

    dilatacaoRelativaResultado.textContent =
        dilatacaoRelativa.toExponential(4);


    // --------------------------------------------------------
    // DILATAÇÃO PERCENTUAL
    // --------------------------------------------------------

    dilatacaoPercentualResultado.textContent =
        formatarNumero(
            dilatacaoPercentual,
            6
        );


    // --------------------------------------------------------
    // ΔL
    // --------------------------------------------------------

    deltaLResultado.textContent =
        formatarNumero(
            deltaL,
            9
        );


    // --------------------------------------------------------
    // COMPRIMENTO FINAL
    // --------------------------------------------------------

    comprimentoFinalResultado.textContent =
        formatarNumero(
            comprimentoFinal,
            9
        );


    // --------------------------------------------------------
    // MOSTRAR RESULTADOS
    // --------------------------------------------------------

    resultadoCalculo.hidden = false;

    equacao.hidden = false;


    // --------------------------------------------------------
    // DESENHAR GRÁFICO
    // --------------------------------------------------------

    desenharGrafico(
        material,
        comprimentoInicial,
        Ti,
        Tf
    );
}


// ============================================================
// GRÁFICO DE DILATAÇÃO
// ============================================================

function desenharGrafico(
    material,
    comprimentoInicial,
    Ti,
    Tf
) {

    const canvas =
        document.getElementById(
            "graficoDilatacao"
        );

    if (!canvas) {

        console.error(
            "Canvas do gráfico não encontrado."
        );

        return;
    }


    const ctx =
        canvas.getContext("2d");


    if (!ctx) {

        console.error(
            "Contexto 2D não disponível."
        );

        return;
    }


    // ========================================================
    // DIMENSÕES
    // ========================================================

    const container =
        canvas.parentElement;

    const largura =
        container.clientWidth - 20;

    const altura =
        container.clientHeight - 20;


    if (
        largura <= 0 ||
        altura <= 0
    ) {

        console.error(
            "Dimensões inválidas do canvas."
        );

        return;
    }


    // ========================================================
    // RESOLUÇÃO
    // ========================================================

    const dpr =
        window.devicePixelRatio || 1;


    canvas.width =
        largura * dpr;

    canvas.height =
        altura * dpr;

    canvas.style.width =
        `${largura}px`;

    canvas.style.height =
        `${altura}px`;


    ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
    );


    // ========================================================
    // MARGENS
    // ========================================================

    const margemEsquerda = 80;
    const margemDireita = 30;
    const margemSuperior = 30;
    const margemInferior = 65;


    const larguraGrafico =
        largura -
        margemEsquerda -
        margemDireita;


    const alturaGrafico =
        altura -
        margemSuperior -
        margemInferior;


    // ========================================================
    // GERAR PONTOS
    // ========================================================

    const numeroPontos = 100;

    const temperaturas = [];
    const comprimentos = [];


    for (
        let i = 0;
        i <= numeroPontos;
        i++
    ) {

        const fracao =
            i / numeroPontos;


        const T =
            Ti +
            (Tf - Ti) * fracao;


        const L =
            calcularComprimentoNaTemperatura(
                material,
                comprimentoInicial,
                Ti,
                T
            );


        if (
            Number.isFinite(T) &&
            Number.isFinite(L)
        ) {

            temperaturas.push(T);
            comprimentos.push(L);
        }
    }


    if (
        temperaturas.length < 2
    ) {

        console.error(
            "Pontos insuficientes para desenhar o gráfico."
        );

        return;
    }


    // ========================================================
    // LIMITES
    // ========================================================

    const Tmin =
        Math.min(...temperaturas);

    const Tmax =
        Math.max(...temperaturas);

    const Lmin =
        Math.min(...comprimentos);

    const Lmax =
        Math.max(...comprimentos);


    const variacaoL =
        Lmax - Lmin;


    let margemL;


    if (variacaoL > 0) {

        margemL =
            variacaoL * 0.15;

    } else {

        margemL =
            Math.abs(Lmin) * 0.001;

        if (margemL === 0) {
            margemL = 0.001;
        }
    }


    const eixoYMin =
        Lmin - margemL;

    const eixoYMax =
        Lmax + margemL;


    // ========================================================
    // LIMPAR
    // ========================================================

    ctx.clearRect(
        0,
        0,
        largura,
        altura
    );


    // ========================================================
    // FUNDO
    // ========================================================

    ctx.fillStyle =
        "#f8fafc";

    ctx.fillRect(
        0,
        0,
        largura,
        altura
    );


    // ========================================================
    // COORDENADAS
    // ========================================================

    function converterX(T) {

        if (Tmax === Tmin) {

            return margemEsquerda +
                larguraGrafico / 2;
        }

        return margemEsquerda +
            (
                (T - Tmin) /
                (Tmax - Tmin)
            ) *
            larguraGrafico;
    }


    function converterY(L) {

        if (eixoYMax === eixoYMin) {

            return margemSuperior +
                alturaGrafico / 2;
        }

        return margemSuperior +
            (
                (eixoYMax - L) /
                (eixoYMax - eixoYMin)
            ) *
            alturaGrafico;
    }


    // ========================================================
    // GRADE HORIZONTAL
    // ========================================================

    const numeroLinhas = 5;

    ctx.font =
        "12px Arial";

    ctx.textAlign =
        "right";

    ctx.textBaseline =
        "middle";


    for (
        let i = 0;
        i <= numeroLinhas;
        i++
    ) {

        const fracao =
            i / numeroLinhas;


        const y =
            margemSuperior +
            fracao * alturaGrafico;


        const valor =
            eixoYMax -
            fracao *
            (eixoYMax - eixoYMin);


        ctx.strokeStyle =
            "#dbe3ec";

        ctx.lineWidth = 1;


        ctx.beginPath();

        ctx.moveTo(
            margemEsquerda,
            y
        );

        ctx.lineTo(
            margemEsquerda +
            larguraGrafico,
            y
        );

        ctx.stroke();


        ctx.fillStyle =
            "#64748b";


        ctx.fillText(
            formatarNumero(valor, 6),
            margemEsquerda - 10,
            y
        );
    }


    // ========================================================
    // GRADE VERTICAL
    // ========================================================

    const numeroColunas = 5;

    ctx.textAlign =
        "center";

    ctx.textBaseline =
        "top";


    for (
        let i = 0;
        i <= numeroColunas;
        i++
    ) {

        const fracao =
            i / numeroColunas;


        const x =
            margemEsquerda +
            fracao * larguraGrafico;


        const valor =
            Tmin +
            fracao *
            (Tmax - Tmin);


        ctx.strokeStyle =
            "#dbe3ec";

        ctx.lineWidth = 1;


        ctx.beginPath();

        ctx.moveTo(
            x,
            margemSuperior
        );

        ctx.lineTo(
            x,
            margemSuperior +
            alturaGrafico
        );

        ctx.stroke();


        ctx.fillStyle =
            "#64748b";


        ctx.fillText(
            `${formatarNumero(valor, 1)} °C`,
            x,
            margemSuperior +
            alturaGrafico +
            12
        );
    }


    // ========================================================
    // EIXOS
    // ========================================================

    ctx.strokeStyle =
        "#64748b";

    ctx.lineWidth = 1.5;


    ctx.beginPath();


    // Eixo Y

    ctx.moveTo(
        margemEsquerda,
        margemSuperior
    );

    ctx.lineTo(
        margemEsquerda,
        margemSuperior +
        alturaGrafico
    );


    // Eixo X

    ctx.lineTo(
        margemEsquerda +
        larguraGrafico,
        margemSuperior +
        alturaGrafico
    );


    ctx.stroke();


    // ========================================================
    // CURVA
    // ========================================================

    ctx.strokeStyle =
        "#2563eb";

    ctx.lineWidth = 3;

    ctx.lineJoin =
        "round";

    ctx.lineCap =
        "round";


    ctx.beginPath();


    for (
        let i = 0;
        i < temperaturas.length;
        i++
    ) {

        const x =
            converterX(
                temperaturas[i]
            );


        const y =
            converterY(
                comprimentos[i]
            );


        if (i === 0) {

            ctx.moveTo(
                x,
                y
            );

        } else {

            ctx.lineTo(
                x,
                y
            );
        }
    }


    ctx.stroke();


    // ========================================================
    // PONTOS INICIAL E FINAL
    // ========================================================

    const indices = [
        0,
        temperaturas.length - 1
    ];


    ctx.fillStyle =
        "#2563eb";


    for (const indice of indices) {

        const x =
            converterX(
                temperaturas[indice]
            );


        const y =
            converterY(
                comprimentos[indice]
            );


        ctx.beginPath();

        ctx.arc(
            x,
            y,
            5,
            0,
            2 * Math.PI
        );

        ctx.fill();
    }


    // ========================================================
    // TÍTULO DO EIXO Y
    // ========================================================

    ctx.save();


    ctx.translate(
        20,
        margemSuperior +
        alturaGrafico / 2
    );


    ctx.rotate(
        -Math.PI / 2
    );


    ctx.fillStyle =
        "#334155";

    ctx.font =
        "14px Arial";

    ctx.textAlign =
        "center";

    ctx.textBaseline =
        "middle";


    ctx.fillText(
        "Comprimento (m)",
        0,
        0
    );


    ctx.restore();


    // ========================================================
    // TÍTULO DO EIXO X
    // ========================================================

    ctx.fillStyle =
        "#334155";

    ctx.font =
        "14px Arial";

    ctx.textAlign =
        "center";

    ctx.textBaseline =
        "middle";


    ctx.fillText(
        "Temperatura (°C)",
        margemEsquerda +
        larguraGrafico / 2,
        altura - 20
    );


    // ========================================================
    // DEBUG
    // ========================================================

    console.log(
        "Gráfico desenhado com sucesso.",
        {
            material: material.nome,
            pontos: temperaturas.length,
            Tmin: Tmin,
            Tmax: Tmax,
            Lmin: Lmin,
            Lmax: Lmax
        }
    );
}


// ============================================================
// EVENTOS
// ============================================================

materialSelect.addEventListener(
    "change",
    atualizarDadosMaterial
);


calcularButton.addEventListener(
    "click",
    calcular
);


// ============================================================
// INICIALIZAÇÃO
// ============================================================

preencherMateriais();
