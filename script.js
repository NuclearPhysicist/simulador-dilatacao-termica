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
// EQUAÇÃO DE PAPADAKIS
//
// (L - L25) / L25 =
// B0 × 10⁻³ +
// B1 × 10⁻⁶ × T +
// B2 × 10⁻⁹ × T²
//
// T    → temperatura em °C
// L25  → comprimento na temperatura de referência de 25 °C
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
// ELEMENTOS — INFORMAÇÕES DO MATERIAL
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
// ELEMENTOS — RESULTADOS
// ============================================================

const alphaResultado =
    document.getElementById("alphaResultado");

const deltaTResultado =
    document.getElementById("deltaTResultado");

const dilatacaoRelativaResultado =
    document.getElementById(
        "dilatacaoRelativaResultado"
    );

const dilatacaoPercentualResultado =
    document.getElementById(
        "dilatacaoPercentualResultado"
    );

const deltaLResultado =
    document.getElementById("deltaLResultado");

const comprimentoFinalResultado =
    document.getElementById(
        "comprimentoFinalResultado"
    );

const equacao =
    document.getElementById("equacao");


// ============================================================
// FUNÇÃO — DILATAÇÃO RELATIVA
// ============================================================
//
// ε(T) =
// B0 × 10⁻³ +
// B1 × 10⁻⁶ × T +
// B2 × 10⁻⁹ × T²
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
// FUNÇÃO — FATOR DE COMPRIMENTO
// ============================================================
//
// L(T) / L25 = 1 + ε(T)
//
// ============================================================

function calcularFatorComprimento(material, T) {

    return (
        1 +
        calcularDilatacaoRelativa(material, T)
    );
}


// ============================================================
// FUNÇÃO — COMPRIMENTO NA TEMPERATURA T
// ============================================================
//
// O comprimento inicial fornecido pelo usuário é interpretado
// como o comprimento na temperatura inicial Ti.
//
// Para obter L(T), usamos a razão:
//
// L(T) / L(Ti)
//
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


    return (
        comprimentoInicial *
        fatorTemperatura /
        fatorInicial
    );
}


// ============================================================
// FUNÇÃO — COEFICIENTE DE EXPANSÃO LINEAR
// ============================================================
//
// α(T) = (1/L) × dL/dT
//
// Como:
//
// L(T) / L25 =
// 1 + B0×10⁻³ +
// B1×10⁻⁶T +
// B2×10⁻⁹T²
//
// temos:
//
// α(T) =
//
// [B1×10⁻⁶ + 2B2×10⁻⁹T]
// ----------------------------------------------
// [1 + B0×10⁻³ +
//      B1×10⁻⁶T +
//      B2×10⁻⁹T²]
//
// Resultado: K⁻¹
//
// ============================================================

function calcularCoeficienteLinear(material, T) {

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
// FUNÇÃO — TEMPERATURA MÉDIA
// ============================================================
//
// Usada para apresentar um único α representativo
// do intervalo Ti → Tf.
//
// ============================================================

function calcularTemperaturaMedia(Ti, Tf) {

    return (Ti + Tf) / 2;
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
// FUNÇÃO — VERIFICAR INTERVALO DE TEMPERATURA
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
// FUNÇÃO — MOSTRAR ALERTA
// ============================================================

function mostrarAlerta(texto) {

    alerta.textContent = texto;

    alerta.hidden = false;
}


// ============================================================
// FUNÇÃO — ESCONDER ALERTA
// ============================================================

function esconderAlerta() {

    alerta.textContent = "";

    alerta.hidden = true;
}


// ============================================================
// FUNÇÃO — MOSTRAR ERRO
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
    // VERIFICAR TEMPERATURAS
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
    // CÁLCULOS
    // ========================================================


    // Variação de temperatura

    const deltaT =
        Tf - Ti;


    // Dilatação relativa na temperatura inicial

    const epsilonInicial =
        calcularDilatacaoRelativa(
            material,
            Ti
        );


    // Dilatação relativa na temperatura final

    const epsilonFinal =
        calcularDilatacaoRelativa(
            material,
            Tf
        );


    // Comprimento final

    const comprimentoFinal =
        calcularComprimentoNaTemperatura(
            material,
            comprimentoInicial,
            Ti,
            Tf
        );


    // Variação de comprimento

    const deltaL =
        comprimentoFinal -
        comprimentoInicial;


    // Dilatação relativa entre Ti e Tf

    const dilatacaoRelativa =
        (
            comprimentoFinal -
            comprimentoInicial
        ) /
        comprimentoInicial;


    // Dilatação percentual

    const dilatacaoPercentual =
        dilatacaoRelativa * 100;


    // Temperatura média

    const temperaturaMedia =
        calcularTemperaturaMedia(
            Ti,
            Tf
        );


    // Coeficiente linear na temperatura média

    const alpha =
        calcularCoeficienteLinear(
            material,
            temperaturaMedia
        );


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
        `${formatarCientifico(alpha)} K⁻¹`;


    // --------------------------------------------------------
    // ΔT
    // --------------------------------------------------------

    deltaTResultado.textContent =
        formatarNumero(deltaT, 2);


    // --------------------------------------------------------
    // DILATAÇÃO RELATIVA
    // --------------------------------------------------------

    dilatacaoRelativaResultado.textContent =
        formatarCientifico(
            dilatacaoRelativa
        );


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


    // ========================================================
    // ALERTA PARA TRANSFORMAÇÕES / LIMITES
    // ========================================================

    if (material.condicao) {

        mostrarAlerta(
            `Observação: ${material.condicao}.`
        );
    }


    // ========================================================
    // DEBUG NO CONSOLE
    // ========================================================

    console.log(
        "=========================================="
    );

    console.log(
        "SIMULADOR DE DILATAÇÃO TÉRMICA"
    );

    console.log(
        "=========================================="
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
        "ΔT:",
        deltaT,
        "K"
    );

    console.log(
        "Temperatura média:",
        temperaturaMedia,
        "°C"
    );

    console.log(
        "B0:",
        material.B0
    );

    console.log(
        "B1:",
        material.B1
    );

    console.log(
        "B2:",
        material.B2
    );

    console.log(
        "α(Tm):",
        alpha,
        "K⁻¹"
    );

    console.log(
        "Dilatação relativa:",
        dilatacaoRelativa
    );

    console.log(
        "ΔL:",
        deltaL,
        "m"
    );

    console.log(
        "L final:",
        comprimentoFinal,
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


            option.value = chave;

            option.textContent =
                `${material.nome} (${material.simbolo})`;


            materialSelect.appendChild(option);

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
    // Dados gerais
    // --------------------------------------------------------

    referenciaMaterial.textContent =
        material.referencia || "Papadakis (1972)";


    tminMaterial.textContent =
        `${material.Tmin} °C`;


    tmaxMaterial.textContent =
        `${material.Tmax} °C`;


    rhoMaterial.textContent =
        `${material.rho} g/cm³`;


    // --------------------------------------------------------
    // Coeficientes
    // --------------------------------------------------------

    b0Material.textContent =
        material.B0;


    b1Material.textContent =
        material.B1;


    b2Material.textContent =
        material.B2;


    // --------------------------------------------------------
    // Limites dos campos de temperatura
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
    // Ajustar temperaturas se necessário
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
        Ti > material.Tmax
    ) {

        temperaturaInicialInput.value =
            material.Tmin;
    }


    if (
        Tf < material.Tmin ||
        Tf > material.Tmax
    ) {

        temperaturaFinalInput.value =
            material.Tmin;
    }


    // --------------------------------------------------------
    // Limpar resultado anterior
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
// EVENTO — BOTÃO CALCULAR
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
// INICIALIZAÇÃO
// ============================================================

carregarMateriais();

atualizarInformacoesMaterial();
