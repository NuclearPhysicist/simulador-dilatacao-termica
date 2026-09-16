// ============================================================
// SIMULADOR DE DILATAÇÃO TÉRMICA
// ============================================================
//
// Modelo baseado em:
//
// Papadakis, E. P. (1972)
// Tabulation of the Coefficients of a Quadratic Function
// for the Thermal Expansion of Various Alloys and Other
// Engineering Materials.
//
// ============================================================
//
// DOIS MODELOS:
//
// 1. MODELO ESCOLAR
//
// L(T) = Li [1 + α25 (T - Ti)]
//
// α25 = α(25 °C)
//
// O coeficiente permanece constante.
//
// ------------------------------------------------------------
//
// 2. MODELO REAL — PAPADAKIS
//
// F(T) = 1 + B0×10⁻³
//          + B1×10⁻⁶T
//          + B2×10⁻⁹T²
//
// L(T) = Li F(T) / F(Ti)
//
// ============================================================
//
// A função α(T) é mantida no código para uma futura
// demonstração da variação do coeficiente de dilatação.
//
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

const calcularBtn =
    document.getElementById("calcular");

const mensagem =
    document.getElementById("mensagem");

const resultadoCalculo =
    document.getElementById("resultadoCalculo");

const alerta =
    document.getElementById("alerta");


// ============================================================
// INFORMAÇÕES DO MATERIAL
// ============================================================

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


// ============================================================
// RESULTADOS
// ============================================================

const alphaResultado =
    document.getElementById("alphaResultado");

const deltaTResultado =
    document.getElementById("deltaTResultado");

const dilatacaoRelativaEscolar =
    document.getElementById(
        "dilatacaoRelativaEscolar"
    );

const dilatacaoRelativaPapadakis =
    document.getElementById(
        "dilatacaoRelativaPapadakis"
    );

const dilatacaoPercentualEscolar =
    document.getElementById(
        "dilatacaoPercentualEscolar"
    );

const dilatacaoPercentualPapadakis =
    document.getElementById(
        "dilatacaoPercentualPapadakis"
    );

const deltaLEscolar =
    document.getElementById("deltaLEscolar");

const deltaLPapadakis =
    document.getElementById("deltaLPapadakis");

const comprimentoFinalEscolar =
    document.getElementById(
        "comprimentoFinalEscolar"
    );

const comprimentoFinalPapadakis =
    document.getElementById(
        "comprimentoFinalPapadakis"
    );

const diferencaComprimento =
    document.getElementById(
        "diferencaComprimento"
    );

const diferencaPercentual =
    document.getElementById(
        "diferencaPercentual"
    );

const equacao =
    document.getElementById("equacao");

const faixaGrafico =
    document.getElementById("faixaGrafico");


// ============================================================
// MODELO DE PAPADAKIS
// ============================================================
//
// ε(T) = B0×10⁻³
//      + B1×10⁻⁶T
//      + B2×10⁻⁹T²
//
// ============================================================

function calcularDilatacaoRelativa(material, T) {

    const B0 = material.B0;
    const B1 = material.B1;
    const B2 = material.B2;

    return (
        B0 * 1e-3 +
        B1 * 1e-6 * T +
        B2 * 1e-9 * T * T
    );
}


// ============================================================
// FATOR DE COMPRIMENTO
// ============================================================
//
// F(T) = 1 + ε(T)
//
// ============================================================

function calcularFatorComprimento(material, T) {

    return (
        1 +
        calcularDilatacaoRelativa(
            material,
            T
        )
    );
}


// ============================================================
// MODELO REAL — PAPADAKIS
// ============================================================
//
// O comprimento inicial Li corresponde à temperatura Ti.
//
// L(T) = Li × F(T) / F(Ti)
//
// ============================================================

function calcularComprimentoPapadakis(
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

    return (
        comprimentoInicial *
        fatorTemperatura /
        fatorInicial
    );
}


// ============================================================
// DERIVADA DO MODELO
// ============================================================
//
// α(T) = (1/L) × dL/dT
//
// α(T) =
//
// [B1×10⁻⁶ + 2B2×10⁻⁹T]
// -----------------------------------
// [1 + B0×10⁻³
//    + B1×10⁻⁶T
//    + B2×10⁻⁹T²]
//
// Resultado: K⁻¹
//
// IMPORTANTE:
//
// Esta função NÃO é um terceiro modelo de comprimento.
//
// Ela será utilizada para demonstrar futuramente que
// o coeficiente de dilatação varia com a temperatura.
//
// ============================================================

function calcularCoeficienteLinear(
    material,
    T
) {

    const B0 = material.B0;
    const B1 = material.B1;
    const B2 = material.B2;

    const numerador =
        B1 * 1e-6 +
        2 * B2 * 1e-9 * T;

    const denominador =
        1 +
        B0 * 1e-3 +
        B1 * 1e-6 * T +
        B2 * 1e-9 * T * T;

    return numerador / denominador;
}


// ============================================================
// COEFICIENTE DO MODELO ESCOLAR
// ============================================================
//
// O modelo escolar utiliza α em 25 °C.
//
// Esse valor é calculado pela derivada do modelo de Papadakis
// em T = 25 °C e depois permanece constante.
//
// ============================================================

function calcularAlpha25(material) {

    const Tref =
        material.Tref !== undefined
            ? material.Tref
            : 25;

    return calcularCoeficienteLinear(
        material,
        Tref
    );
}


// ============================================================
// MODELO ESCOLAR
// ============================================================
//
// L(T) = Li [1 + α25(T - Ti)]
//
// ============================================================

function calcularComprimentoEscolar(
    material,
    comprimentoInicial,
    temperaturaInicial,
    temperatura
) {

    const alpha25 =
        calcularAlpha25(material);

    return (
        comprimentoInicial *
        (
            1 +
            alpha25 *
            (
                temperatura -
                temperaturaInicial
            )
        )
    );
}


// ============================================================
// FUNÇÃO — FORMATAR NÚMERO
// ============================================================

function formatarNumero(
    valor,
    casas = 6
) {

    return valor.toLocaleString(
        "pt-BR",
        {
            minimumFractionDigits: casas,
            maximumFractionDigits: casas
        }
    );
}


// ============================================================
// FUNÇÃO — NOTAÇÃO CIENTÍFICA
// ============================================================

function formatarCientifico(
    valor,
    casas = 4
) {

    return valor.toExponential(casas);
}


// ============================================================
// FUNÇÃO — OBTER MATERIAL
// ============================================================

function obterMaterialSelecionado() {

    const chave =
        materialSelect.value;

    return materiais[chave];
}


// ============================================================
// VERIFICAR TEMPERATURAS
// ============================================================

function verificarTemperaturas(
    material,
    Ti,
    Tf
) {

    if (
        Ti < material.Tmin ||
        Ti > material.Tmax
    ) {

        return {
            valido: false,

            mensagem:
                `A temperatura inicial (${Ti} °C) ` +
                `está fora da faixa de validade ` +
                `do modelo para ${material.nome}. ` +
                `Faixa: ${material.Tmin} °C a ` +
                `${material.Tmax} °C.`
        };
    }


    if (
        Tf < material.Tmin ||
        Tf > material.Tmax
    ) {

        return {
            valido: false,

            mensagem:
                `A temperatura final (${Tf} °C) ` +
                `está fora da faixa de validade ` +
                `do modelo para ${material.nome}. ` +
                `Faixa: ${material.Tmin} °C a ` +
                `${material.Tmax} °C.`
        };
    }


    return {
        valido: true,
        mensagem: ""
    };
}


// ============================================================
// MOSTRAR ALERTA
// ============================================================

function mostrarAlerta(texto) {

    alerta.textContent = texto;
    alerta.hidden = false;
}


// ============================================================
// ESCONDER ALERTA
// ============================================================

function esconderAlerta() {

    alerta.textContent = "";
    alerta.hidden = true;
}


// ============================================================
// MOSTRAR ERRO
// ============================================================

function mostrarErro(texto) {

    mensagem.innerHTML = `
        <p>
            <strong>${texto}</strong>
        </p>
    `;

    resultadoCalculo.hidden = true;
    equacao.hidden = true;
}


// ============================================================
// FUNÇÃO PRINCIPAL — CALCULAR
// ============================================================

function calcular() {

    esconderAlerta();


    // --------------------------------------------------------
    // MATERIAL
    // --------------------------------------------------------

    const material =
        obterMaterialSelecionado();

    if (!material) {

        mostrarErro(
            "Selecione um material."
        );

        return;
    }


    // --------------------------------------------------------
    // COMPRIMENTO INICIAL
    // --------------------------------------------------------

    const comprimentoInicial =
        parseFloat(
            comprimentoInicialInput.value
        );

    if (
        isNaN(comprimentoInicial) ||
        comprimentoInicial <= 0
    ) {

        mostrarErro(
            "Digite um comprimento inicial maior que zero."
        );

        return;
    }


    // --------------------------------------------------------
    // TEMPERATURA INICIAL
    // --------------------------------------------------------

    const Ti =
        parseFloat(
            temperaturaInicialInput.value
        );

    if (isNaN(Ti)) {

        mostrarErro(
            "Digite uma temperatura inicial válida."
        );

        return;
    }


    // --------------------------------------------------------
    // TEMPERATURA FINAL
    // --------------------------------------------------------

    const Tf =
        parseFloat(
            temperaturaFinalInput.value
        );

    if (isNaN(Tf)) {

        mostrarErro(
            "Digite uma temperatura final válida."
        );

        return;
    }


    // --------------------------------------------------------
    // VERIFICAR INTERVALO
    // --------------------------------------------------------

    const verificacao =
        verificarTemperaturas(
            material,
            Ti,
            Tf
        );

    if (!verificacao.valido) {

        mostrarErro(
            verificacao.mensagem
        );

        return;
    }


    // ========================================================
    // MODELO ESCOLAR
    // ========================================================

    const alpha25 =
        calcularAlpha25(material);

    const comprimentoEscolar =
        calcularComprimentoEscolar(
            material,
            comprimentoInicial,
            Ti,
            Tf
        );

    const deltaLEscolar =
        comprimentoEscolar -
        comprimentoInicial;

    const valorDilatacaoRelativaEscolar =
        deltaLEscolar /
        comprimentoInicial;
    
    const valorDilatacaoPercentualEscolar =
        valorDilatacaoRelativaEscolar * 100;


    // ========================================================
    // MODELO PAPADAKIS
    // ========================================================

    const comprimentoPapadakis =
        calcularComprimentoPapadakis(
            material,
            comprimentoInicial,
            Ti,
            Tf
        );

    const deltaLPapadakis =
        comprimentoPapadakis -
        comprimentoInicial;

    const valorDilatacaoRelativaPapadakis =
        deltaLPapadakis /
        comprimentoInicial;
    
    const valorDilatacaoPercentualPapadakis =
        valorDilatacaoRelativaPapadakis * 100;


    // ========================================================
    // DIFERENÇA ENTRE OS MODELOS
    // ========================================================

    const diferenca =
        comprimentoPapadakis -
        comprimentoEscolar;

    const diferencaPercentual =
        (
            diferenca /
            comprimentoEscolar
        ) * 100;


    // ========================================================
    // ΔT
    // ========================================================

    const deltaT =
        Tf - Ti;


    // ========================================================
    // MENSAGEM
    // ========================================================

    mensagem.innerHTML = `
        <p>
            Resultado da simulação para
            <strong>${material.nome}</strong>.
        </p>

        <p>
            O comprimento inicial
            <strong>${formatarNumero(comprimentoInicial, 6)} m</strong>
            foi considerado na temperatura
            <strong>${formatarNumero(Ti, 1)} °C</strong>.
        </p>
    `;


    // ========================================================
    // α25
    // ========================================================

    const alphaMicro =
        alpha25 * 1e6;

    alphaResultado.textContent =
        `${formatarNumero(alphaMicro, 4)} × 10⁻⁶`;


    // ========================================================
    // ΔT
    // ========================================================

    deltaTResultado.textContent =
        formatarNumero(deltaT, 2);


    // ========================================================
    // MODELO ESCOLAR
    // ========================================================

    dilatacaoRelativaEscolar.textContent =
        formatarCientifico(
            valorDilatacaoRelativaEscolar
        );
    
    dilatacaoPercentualEscolar.textContent =
        `${formatarNumero(
            valorDilatacaoPercentualEscolar,
            6
        )} %`;

    deltaLEscolar.textContent =
        `${formatarNumero(
            deltaLEscolar,
            9
        )} m`;

    comprimentoFinalEscolar.textContent =
        `${formatarNumero(
            comprimentoEscolar,
            9
        )} m`;


    // ========================================================
    // MODELO PAPADAKIS
    // ========================================================

    dilatacaoRelativaPapadakis.textContent =
        formatarCientifico(
            valorDilatacaoRelativaPapadakis
        );
    
    dilatacaoPercentualPapadakis.textContent =
        `${formatarNumero(
            valorDilatacaoPercentualPapadakis,
            6
        )} %`;

    deltaLPapadakis.textContent =
        `${formatarNumero(
            deltaLPapadakis,
            9
        )} m`;

    comprimentoFinalPapadakis.textContent =
        `${formatarNumero(
            comprimentoPapadakis,
            9
        )} m`;


    // ========================================================
    // DIFERENÇA
    // ========================================================

    diferencaComprimento.textContent =
        `${formatarNumero(
            diferenca,
            9
        )} m`;

    diferencaPercentual.textContent =
        `${formatarNumero(
            diferencaPercentual,
            6
        )} %`;


    // ========================================================
    // MOSTRAR RESULTADOS
    // ========================================================

    resultadoCalculo.hidden = false;

    equacao.hidden = false;


    // ========================================================
    // FAIXA DO GRÁFICO
    // ========================================================

    faixaGrafico.textContent =
        `${material.Tmin} °C a ${material.Tmax} °C`;


    // ========================================================
    // GRÁFICO
    // ========================================================

    desenharGrafico(
        material,
        comprimentoInicial,
        Ti,
        Tf
    );


    // ========================================================
    // ALERTA
    // ========================================================

    if (material.condicao) {

        mostrarAlerta(
            `Observação: ${material.condicao}.`
        );
    }


    // ========================================================
    // DEBUG
    // ========================================================

    console.log(
        "=========================================="
    );

    console.log(
        "SIMULADOR DE DILATAÇÃO TÉRMICA"
    );

    console.log(
        "Material:",
        material.nome
    );

    console.log(
        "Ti:",
        Ti,
        "°C"
    );

    console.log(
        "Tf:",
        Tf,
        "°C"
    );

    console.log(
        "α25:",
        alpha25,
        "K⁻¹"
    );

    console.log(
        "Modelo escolar:",
        comprimentoEscolar,
        "m"
    );

    console.log(
        "Papadakis:",
        comprimentoPapadakis,
        "m"
    );

    console.log(
        "Diferença:",
        diferenca,
        "m"
    );

    console.log(
        "=========================================="
    );
}


// ============================================================
// PREENCHER SELECT DE MATERIAIS
// ============================================================

function carregarMateriais() {

    materialSelect.innerHTML = "";

    Object.keys(materiais).forEach(
        function(chave) {

            const material =
                materiais[chave];

            const option =
                document.createElement("option");

            option.value =
                chave;

            option.textContent =
                `${material.nome} (${material.simbolo})`;

            materialSelect.appendChild(
                option
            );
        }
    );
}


// ============================================================
// ATUALIZAR INFORMAÇÕES DO MATERIAL
// ============================================================

function atualizarInformacoesMaterial() {

    const material =
        obterMaterialSelecionado();

    if (!material) {
        return;
    }


    // --------------------------------------------------------
    // DADOS GERAIS
    // --------------------------------------------------------

    referenciaMaterial.textContent =
        material.referencia ||
        "Papadakis (1972)";

    tminMaterial.textContent =
        `${material.Tmin} °C`;

    tmaxMaterial.textContent =
        `${material.Tmax} °C`;

    rhoMaterial.textContent =
        `${material.rho} g/cm³`;


    // --------------------------------------------------------
    // COEFICIENTES
    // --------------------------------------------------------

    b0Material.textContent =
        material.B0;

    b1Material.textContent =
        material.B1;

    b2Material.textContent =
        material.B2;


    // --------------------------------------------------------
    // LIMITES DOS CAMPOS
    // --------------------------------------------------------

    temperaturaInicialInput.min =
        material.Tmin;

    temperaturaInicialInput.max =
        material.Tmax;

    temperaturaFinalInput.min =
        material.Tmin;

    temperaturaFinalInput.max =
        material.Tmax;


    // --------------------------------------------------------
    // AJUSTAR TEMPERATURAS
    // --------------------------------------------------------

    const Ti =
        parseFloat(
            temperaturaInicialInput.value
        );

    const Tf =
        parseFloat(
            temperaturaFinalInput.value
        );


    if (
        Ti < material.Tmin ||
        Ti > material.Tmax ||
        isNaN(Ti)
    ) {

        temperaturaInicialInput.value =
            material.Tmin;
    }


    if (
        Tf < material.Tmin ||
        Tf > material.Tmax ||
        isNaN(Tf)
    ) {

        temperaturaFinalInput.value =
            material.Tmin;
    }


    // --------------------------------------------------------
    // LIMPAR RESULTADOS
    // --------------------------------------------------------

    resultadoCalculo.hidden = true;

    equacao.hidden = true;

    esconderAlerta();

    mensagem.innerHTML = `
        <p>
            Configure os valores e clique em
            <strong>Calcular</strong>.
        </p>
    `;
}


// ============================================================
// EVENTO — CALCULAR
// ============================================================

calcularBtn.addEventListener(
    "click",
    calcular
);


// ============================================================
// EVENTO — MUDANÇA DE MATERIAL
// ============================================================

materialSelect.addEventListener(
    "change",
    atualizarInformacoesMaterial
);


// ============================================================
// ENTER — COMPRIMENTO
// ============================================================

comprimentoInicialInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            calcular();
        }
    }
);


// ============================================================
// ENTER — TEMPERATURA INICIAL
// ============================================================

temperaturaInicialInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            calcular();
        }
    }
);


// ============================================================
// ENTER — TEMPERATURA FINAL
// ============================================================

temperaturaFinalInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            calcular();
        }
    }
);


// ============================================================
// GRÁFICO
// ============================================================
//
// IMPORTANTE:
//
// O eixo X usa SEMPRE:
//
// material.Tmin → material.Tmax
//
// Ti e Tf são apenas marcadores do intervalo utilizado
// no cálculo.
//
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
        return;
    }


    const ctx =
        canvas.getContext("2d");


    const L0 =
        Number(comprimentoInicial);


    if (
        !Number.isFinite(L0) ||
        !Number.isFinite(Ti) ||
        !Number.isFinite(Tf)
    ) {

        console.error(
            "Valores inválidos para o gráfico."
        );

        return;
    }


    // ========================================================
    // TAMANHO DO CANVAS
    // ========================================================

    const largura =
        canvas.clientWidth;

    const altura =
        canvas.clientHeight;


    if (
        largura <= 0 ||
        altura <= 0
    ) {

        return;
    }


    const escala =
        window.devicePixelRatio || 1;


    canvas.width =
        largura * escala;

    canvas.height =
        altura * escala;


    ctx.setTransform(
        escala,
        0,
        0,
        escala,
        0,
        0
    );


    // ========================================================
    // MARGENS
    // ========================================================

    const margemEsquerda = 85;
    const margemDireita = 30;
    const margemSuperior = 35;
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
    // LIMITES DO EIXO X
    // ========================================================

    const eixoXMin =
        Number(material.Tmin);

    const eixoXMax =
        Number(material.Tmax);


    const variacaoTemperatura =
        eixoXMax -
        eixoXMin;


    if (
        !Number.isFinite(eixoXMin) ||
        !Number.isFinite(eixoXMax) ||
        variacaoTemperatura <= 0
    ) {

        console.error(
            "Faixa de temperatura inválida."
        );

        return;
    }


    // ========================================================
    // GERAR OS DOIS MODELOS
    // ========================================================

    const numeroPontos = 300;

    const temperaturas = [];

    const comprimentosEscolar = [];

    const comprimentosPapadakis = [];


    for (
        let i = 0;
        i <= numeroPontos;
        i++
    ) {

        const proporcao =
            i / numeroPontos;

        const T =
            eixoXMin +
            (
                eixoXMax -
                eixoXMin
            ) *
            proporcao;


        const Lescolar =
            calcularComprimentoEscolar(
                material,
                L0,
                Ti,
                T
            );


        const Lpapadakis =
            calcularComprimentoPapadakis(
                material,
                L0,
                Ti,
                T
            );


        if (
            Number.isFinite(T) &&
            Number.isFinite(Lescolar) &&
            Number.isFinite(Lpapadakis)
        ) {

            temperaturas.push(T);

            comprimentosEscolar.push(
                Lescolar
            );

            comprimentosPapadakis.push(
                Lpapadakis
            );
        }
    }


    if (
        temperaturas.length === 0
    ) {

        console.error(
            "Não foi possível gerar os pontos."
        );

        return;
    }


    // ========================================================
    // LIMITES DO EIXO Y
    // ========================================================

    const todosComprimentos = [
        ...comprimentosEscolar,
        ...comprimentosPapadakis
    ];


    const Lmin =
        Math.min(
            ...todosComprimentos
        );

    const Lmax =
        Math.max(
            ...todosComprimentos
        );


    const variacaoComprimento =
        Lmax - Lmin;


    let margemL;


    if (
        variacaoComprimento > 0
    ) {

        margemL =
            variacaoComprimento * 0.12;

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
    // LIMPAR CANVAS
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
    // CONVERSÃO DE COORDENADAS
    // ========================================================

    function converterX(T) {

        return (
            margemEsquerda +
            (
                (T - eixoXMin) /
                (
                    eixoXMax -
                    eixoXMin
                )
            ) *
            larguraGrafico
        );
    }


    function converterY(L) {

        return (
            margemSuperior +
            (
                (eixoYMax - L) /
                (
                    eixoYMax -
                    eixoYMin
                )
            ) *
            alturaGrafico
        );
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
            fracao *
            alturaGrafico;


        const valor =
            eixoYMax -
            fracao *
            (
                eixoYMax -
                eixoYMin
            );


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
            formatarNumero(
                valor,
                6
            ),
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
            fracao *
            larguraGrafico;


        const valor =
            eixoXMin +
            fracao *
            (
                eixoXMax -
                eixoXMin
            );


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
            `${formatarNumero(
                valor,
                0
            )} °C`,
            x,
            margemSuperior +
            alturaGrafico +
            10
        );
    }


    // ========================================================
    // EIXOS
    // ========================================================

    ctx.strokeStyle =
        "#475569";

    ctx.lineWidth = 1.5;


    ctx.beginPath();

    ctx.moveTo(
        margemEsquerda,
        margemSuperior
    );

    ctx.lineTo(
        margemEsquerda,
        margemSuperior +
        alturaGrafico
    );

    ctx.lineTo(
        margemEsquerda +
        larguraGrafico,
        margemSuperior +
        alturaGrafico
    );

    ctx.stroke();


    // ========================================================
    // MARCAR Ti
    // ========================================================

    desenharMarcadorTemperatura(
        Ti,
        "Ti",
        "#64748b"
    );


    // ========================================================
    // MARCAR Tf
    // ========================================================

    if (Tf !== Ti) {

        desenharMarcadorTemperatura(
            Tf,
            "Tf",
            "#64748b"
        );
    }


    // ========================================================
    // FUNÇÃO PARA MARCADORES Ti / Tf
    // ========================================================

    function desenharMarcadorTemperatura(
        temperatura,
        rotulo,
        estilo
    ) {

        if (
            temperatura < eixoXMin ||
            temperatura > eixoXMax
        ) {
            return;
        }


        const x =
            converterX(temperatura);


        ctx.save();


        ctx.strokeStyle =
            estilo;

        ctx.lineWidth = 1.5;

        ctx.setLineDash([
            7,
            5
        ]);


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


        ctx.setLineDash([]);


        ctx.fillStyle =
            estilo;

        ctx.font =
            "bold 12px Arial";

        ctx.textAlign =
            "center";

        ctx.textBaseline =
            "bottom";


        ctx.fillText(
            `${rotulo} = ${temperatura} °C`,
            x,
            margemSuperior - 6
        );


        ctx.restore();
    }


    // ========================================================
    // CURVA — MODELO ESCOLAR
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
                comprimentosEscolar[i]
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
    // CURVA — PAPADAKIS
    // ========================================================

    ctx.strokeStyle =
        "#16a34a";

    ctx.lineWidth = 3;


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
                comprimentosPapadakis[i]
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
    // PONTO Ti — MODELO ESCOLAR
    // ========================================================

    desenharPonto(
        Ti,
        calcularComprimentoEscolar(
            material,
            L0,
            Ti,
            Ti
        ),
        "#2563eb"
    );


    // ========================================================
    // PONTO Ti — PAPADAKIS
    // ========================================================

    desenharPonto(
        Ti,
        calcularComprimentoPapadakis(
            material,
            L0,
            Ti,
            Ti
        ),
        "#16a34a"
    );


    function desenharPonto(
        T,
        L,
        estilo
    ) {

        if (
            T < eixoXMin ||
            T > eixoXMax
        ) {
            return;
        }


        const x =
            converterX(T);

        const y =
            converterY(L);


        ctx.fillStyle =
            estilo;


        ctx.beginPath();

        ctx.arc(
            x,
            y,
            4,
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
        18,
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
}


// ============================================================
// INICIALIZAÇÃO
// ============================================================

carregarMateriais();

atualizarInformacoesMaterial();
