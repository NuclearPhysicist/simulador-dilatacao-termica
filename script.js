// ============================================================
// SIMULADOR DE DILATAÇÃO TÉRMICA
// ============================================================
//
// Modelo matemático baseado em:
//
// Papadakis, E. P. (1972)
// "Tabulation of the Coefficients of a Quadratic Function
// for the Thermal Expansion of Various Alloys and Other
// Engineering Materials"
//
// Equação:
//
// (L - L25) / L25 =
// B0 × 10⁻³ +
// B1 × 10⁻⁶ × T +
// B2 × 10⁻⁹ × T²
//
// T  → temperatura em °C
// L25 → comprimento na temperatura de referência de 25 °C
//
// O coeficiente de expansão linear instantâneo é:
//
// α(T) = (1/L) × dL/dT
//
// α(T) =
// [B1 × 10⁻⁶ + 2B2 × 10⁻⁹T]
// ------------------------------------------------------------
// [1 + B0 × 10⁻³ + B1 × 10⁻⁶T + B2 × 10⁻⁹T²]
//
// Unidade de α: K⁻¹
//
// ============================================================


// ============================================================
// ELEMENTOS DA INTERFACE
// ============================================================

const materialSelect = document.getElementById("material");

const comprimentoInput = document.getElementById("comprimento");

const temperaturaInput = document.getElementById("temperatura");

const calcularBtn = document.getElementById("calcular");

const resultado = document.getElementById("resultado");


// ============================================================
// FUNÇÃO — DILATAÇÃO RELATIVA
// ============================================================
//
// Calcula:
//
// ε = (L - L25) / L25
//
// ============================================================

function calcularDilatacaoRelativa(material, T) {

    const B0 = material.B0;
    const B1 = material.B1;
    const B2 = material.B2;

    const dilatacaoRelativa =
        B0 * 1e-3 +
        B1 * 1e-6 * T +
        B2 * 1e-9 * T * T;

    return dilatacaoRelativa;
}


// ============================================================
// FUNÇÃO — COMPRIMENTO FINAL
// ============================================================
//
// L(T) = L25 × [1 + ε]
//
// ============================================================

function calcularComprimento(material, L25, T) {

    const dilatacaoRelativa =
        calcularDilatacaoRelativa(material, T);

    return L25 * (1 + dilatacaoRelativa);
}


// ============================================================
// FUNÇÃO — VARIAÇÃO DE COMPRIMENTO
// ============================================================
//
// ΔL = L(T) - L25
//
// ============================================================

function calcularDeltaL(material, L25, T) {

    const L = calcularComprimento(material, L25, T);

    return L - L25;
}


// ============================================================
// FUNÇÃO — COEFICIENTE DE EXPANSÃO LINEAR
// ============================================================
//
// α(T) = (1/L) × dL/dT
//
// Resultado em K⁻¹
//
// ============================================================

function calcularCoeficienteLinear(material, T) {

    const B0 = material.B0;
    const B1 = material.B1;
    const B2 = material.B2;

    // Numerador da derivada

    const numerador =
        B1 * 1e-6 +
        2 * B2 * 1e-9 * T;

    // Comprimento relativo L(T) / L25

    const denominador =
        1 +
        B0 * 1e-3 +
        B1 * 1e-6 * T +
        B2 * 1e-9 * T * T;

    const alpha =
        numerador / denominador;

    return alpha;
}


// ============================================================
// FUNÇÃO — CONVERTER PARA NOTAÇÃO CIENTÍFICA
// ============================================================

function formatarCientifico(valor, casas = 4) {

    return valor.toExponential(casas);
}


// ============================================================
// FUNÇÃO — FORMATAR NÚMERO
// ============================================================

function formatarNumero(valor, casas = 6) {

    return valor.toLocaleString("pt-BR", {
        minimumFractionDigits: casas,
        maximumFractionDigits: casas
    });
}


// ============================================================
// FUNÇÃO — VERIFICAR TEMPERATURA
// ============================================================

function verificarTemperatura(material, T) {

    if (T < material.Tmin) {

        return {
            valido: false,
            mensagem:
                `A temperatura está abaixo do limite ` +
                `do modelo para este material. ` +
                `T mínimo: ${material.Tmin} °C.`
        };
    }


    if (T > material.Tmax) {

        return {
            valido: false,
            mensagem:
                `A temperatura está acima do limite ` +
                `de validade do modelo para este material. ` +
                `T máximo: ${material.Tmax} °C.`
        };
    }


    return {
        valido: true,
        mensagem: ""
    };
}


// ============================================================
// FUNÇÃO — OBTER MATERIAL SELECIONADO
// ============================================================

function obterMaterialSelecionado() {

    const chave = materialSelect.value;

    return materiais[chave];
}


// ============================================================
// FUNÇÃO PRINCIPAL — CALCULAR
// ============================================================

function calcular() {

    // --------------------------------------------------------
    // Obter material
    // --------------------------------------------------------

    const material = obterMaterialSelecionado();


    if (!material) {

        mostrarErro("Selecione um material.");

        return;
    }


    // --------------------------------------------------------
    // Obter comprimento
    // --------------------------------------------------------

    const L25 =
        parseFloat(comprimentoInput.value);


    if (isNaN(L25) || L25 <= 0) {

        mostrarErro(
            "Digite um comprimento inicial válido."
        );

        return;
    }


    // --------------------------------------------------------
    // Obter temperatura
    // --------------------------------------------------------

    const T =
        parseFloat(temperaturaInput.value);


    if (isNaN(T)) {

        mostrarErro(
            "Digite uma temperatura válida."
        );

        return;
    }


    // --------------------------------------------------------
    // Verificar intervalo de temperatura
    // --------------------------------------------------------

    const verificacao =
        verificarTemperatura(material, T);


    if (!verificacao.valido) {

        mostrarErro(verificacao.mensagem);

        return;
    }


    // ========================================================
    // CÁLCULOS
    // ========================================================

    const dilatacaoRelativa =
        calcularDilatacaoRelativa(material, T);


    const comprimentoFinal =
        calcularComprimento(
            material,
            L25,
            T
        );


    const deltaL =
        calcularDeltaL(
            material,
            L25,
            T
        );


    const alpha =
        calcularCoeficienteLinear(
            material,
            T
        );


    const deltaT =
        T - material.Tref;


    // Dilatação percentual

    const dilatacaoPercentual =
        dilatacaoRelativa * 100;


    // ========================================================
    // EXIBIR RESULTADO
    // ========================================================

    resultado.innerHTML = `

        <div class="resultado-card">

            <h2>${material.nome}</h2>

            <div class="resultado-item">

                <span>Temperatura</span>

                <strong>
                    ${formatarNumero(T, 2)} °C
                </strong>

            </div>


            <div class="resultado-item">

                <span>Temperatura de referência</span>

                <strong>
                    ${formatarNumero(material.Tref, 2)} °C
                </strong>

            </div>


            <div class="resultado-item">

                <span>Variação de temperatura</span>

                <strong>
                    ${formatarNumero(deltaT, 2)} K
                </strong>

            </div>


            <div class="resultado-item destaque">

                <span>
                    Coeficiente de expansão linear
                </span>

                <strong>
                    ${formatarCientifico(alpha)} K⁻¹
                </strong>

            </div>


            <div class="resultado-item">

                <span>Dilatação relativa</span>

                <strong>
                    ${formatarCientifico(dilatacaoRelativa)}
                </strong>

            </div>


            <div class="resultado-item">

                <span>Dilatação percentual</span>

                <strong>
                    ${formatarNumero(dilatacaoPercentual, 6)} %
                </strong>

            </div>


            <div class="resultado-item">

                <span>Comprimento inicial</span>

                <strong>
                    ${formatarNumero(L25, 6)} m
                </strong>

            </div>


            <div class="resultado-item">

                <span>Variação de comprimento</span>

                <strong>
                    ${formatarNumero(deltaL, 9)} m
                </strong>

            </div>


            <div class="resultado-item">

                <span>Comprimento final</span>

                <strong>
                    ${formatarNumero(comprimentoFinal, 9)} m
                </strong>

            </div>


            <div class="material-info">

                <p>
                    <strong>Modelo:</strong>
                    Papadakis (1972)
                </p>

                <p>
                    <strong>Faixa de validade:</strong>
                    ${material.Tmin} °C a ${material.Tmax} °C
                </p>

                <p>
                    <strong>ρ:</strong>
                    ${material.rho} g/cm³
                </p>

            </div>

        </div>
    `;
}


// ============================================================
// FUNÇÃO — MOSTRAR ERRO
// ============================================================

function mostrarErro(mensagem) {

    resultado.innerHTML = `

        <div class="erro">

            ${mensagem}

        </div>

    `;
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
    // Atualizar temperatura máxima do input
    // --------------------------------------------------------

    temperaturaInput.min =
        material.Tmin;

    temperaturaInput.max =
        material.Tmax;


    // --------------------------------------------------------
    // Mostrar informação no console
    // --------------------------------------------------------

    console.log(
        "Material selecionado:",
        material.nome
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
        "Temperatura máxima:",
        material.Tmax,
        "°C"
    );

    console.log(
        "Densidade:",
        material.rho,
        "g/cm³"
    );
}


// ============================================================
// EVENTOS
// ============================================================

calcularBtn.addEventListener(
    "click",
    calcular
);


materialSelect.addEventListener(
    "change",
    atualizarInformacoesMaterial
);


// ============================================================
// PERMITIR ENTER NOS CAMPOS
// ============================================================

comprimentoInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            calcular();

        }

    }
);


temperaturaInput.addEventListener(
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

atualizarInformacoesMaterial();
