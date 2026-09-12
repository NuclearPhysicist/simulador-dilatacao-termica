// ============================================================
// SIMULADOR DE DILATAÇÃO TÉRMICA
// Modelo de Zhang, Li e Li (2013)
// Etapa 1 — Equação (3): calor específico a volume constante
// ============================================================


// ------------------------------------------------------------
// 1. Constante universal dos gases
// ------------------------------------------------------------

const R = 8.314462618; // J/(mol·K)


// ------------------------------------------------------------
// 2. Função de Debye
// ------------------------------------------------------------
//
// Calcula:
//
// D3(x) = (3/x³) ∫[0,x] y³/(e^y - 1) dy
//
// Esta função será utilizada na Equação (3).
// ------------------------------------------------------------

function funcaoDebye(x) {

  // Para temperaturas muito altas,
  // x = Theta/T fica próximo de zero.
  if (x < 1e-6) {
    return 1;
  }

  const numeroPassos = 1000;
  const passo = x / numeroPassos;

  let integral = 0;

  for (let i = 0; i < numeroPassos; i++) {

    const y = (i + 0.5) * passo;

    let termo;

    if (y < 1e-6) {
      termo = y * y;
    } else {
      termo = Math.pow(y, 3) / Math.expm1(y);
    }

    integral += termo * passo;
  }

  return (3 / Math.pow(x, 3)) * integral;
}


// ------------------------------------------------------------
// 3. Equação (3) — C_V(T)
// ------------------------------------------------------------
//
// C_V(T) = 3R [
//              4 D3(Theta/T)
//              - 3(Theta/T)/(e^(Theta/T)-1)
//            ]
//
// Theta = temperatura de Debye média do material.
//
// Resultado em J/(mol·K).
// ------------------------------------------------------------

function calcularCv(T, theta) {

  if (T <= 0) {
    return 0;
  }

  const x = theta / T;

  const D3 = funcaoDebye(x);

  const segundoTermo =
    (3 * x) / Math.expm1(x);

  const Cv =
    3 * R *
    (4 * D3 - segundoTermo);

  return Cv;
}

// ============================================
// EQUAÇÃO (4) — Energia interna U(T)
// U(T) = integral de 0 até T de Cv(T) dT
// ============================================

function calcularU(T, theta) {

  if (T <= 0) return 0;

  const numeroPassos = 1000;
  const passo = T / numeroPassos;

  let integral = 0;

  for (let i = 0; i < numeroPassos; i++) {

    const T1 = i * passo;
    const T2 = (i + 1) * passo;

    const Cv1 = calcularCv(T1, theta);
    const Cv2 = calcularCv(T2, theta);

    // Regra do trapézio
    integral += ((Cv1 + Cv2) / 2) * passo;
  }

  return integral;
}

// ============================================================
// EQUAÇÃO (2) — Coeficiente de expansão volumétrica beta(T)
// ============================================================
//
// beta(T) = Cv(T) / [ Q0 * (1 + k * (U(T)/Q0)^2) ]
//
// Cv -> J/(mol·K)
// U  -> J/mol
// Q0 -> J/mol
//
// Resultado:
// beta -> 1/K
// ============================================================

function calcularBeta(T, material) {

  if (T <= 0) {
    return 0;
  }

  const k = material.k;

  // Q0 está em kJ/mol.
  // Converter para J/mol.
  const Q0 = material.Q0 * 1000;

  const Cv = calcularCv(T, material.theta);

  const U = calcularU(T, material.theta);

  const razao = U / Q0;

  const denominador =
    Q0 * (1 - k * Math.pow(razao, 2));

  const beta = Cv / denominador;

  return beta;
}

// ============================================================
// TESTE COMPLETO DO MODELO
// ============================================================

const aluminio = materiais.Al;
const temperaturaTeste = 300;

// ------------------------------------------------------------
// Equação (3)
// ------------------------------------------------------------

const CvAl = calcularCv(
  temperaturaTeste,
  aluminio.theta
);

// ------------------------------------------------------------
// Equação (4)
// ------------------------------------------------------------

const UAl = calcularU(
  temperaturaTeste,
  aluminio.theta
);

// ------------------------------------------------------------
// Equação (2)
// ------------------------------------------------------------

const betaAl = calcularBeta(
  temperaturaTeste,
  aluminio
);

// ------------------------------------------------------------
// Relação beta -> alpha linear
// ------------------------------------------------------------

const alphaAl = calcularAlphaLinear(
  temperaturaTeste,
  aluminio
);






// ============================================================
// RESULTADOS
// ============================================================

console.log("");
console.log("==================================================");
console.log("   VALIDAÇÃO DO MODELO — ALUMÍNIO");
console.log("==================================================");

console.log("Material:", aluminio.nome);
console.log("Temperatura:", temperaturaTeste, "K");
console.log("Theta:", aluminio.theta, "K");

console.log("");
console.log("Equação (3) — Calor específico:");
console.log(
  "Cv =",
  CvAl.toFixed(9),
  "J/(mol·K)"
);

console.log("");
console.log("Equação (4) — Energia interna:");
console.log(
  "U =",
  UAl.toFixed(9),
  "J/mol"
);

console.log("");
console.log("Equação (2) — Expansão volumétrica:");
console.log(
  "Beta =",
  betaAl.toExponential(9),
  "1/K"
);

console.log("");
console.log("Relação isotrópica:");
console.log(
  "Alpha linear = Beta / 3"
);

console.log(
  "Alpha =",
  alphaAl.toExponential(9),
  "1/K"
);

console.log(
  "Alpha =",
  (alphaAl * 1e6).toFixed(6),
  "×10^-6 1/K"
);

console.log("");
console.log("==================================================");
