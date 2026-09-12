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

// ------------------------------------------------------------
// 4. TESTE
// ------------------------------------------------------------
//
// Vamos testar o alumínio da Tabela 2.
//
// Para o Al:
// theta = 367 K
// ------------------------------------------------------------

const aluminio = materiais.Al;

const temperaturaTeste = 300;

const CvAl = calcularCv(
  temperaturaTeste,
  aluminio.theta
);

console.log("=================================");
console.log("TESTE DA EQUAÇÃO (3)");
console.log("=================================");

console.log("Material:", aluminio.nome);

console.log("Temperatura:", temperaturaTeste, "K");

console.log("Theta:", aluminio.theta, "K");

console.log(
  "Cv =",
  CvAl.toFixed(6),
  "J/(mol·K)"
);

// ============================================
// TESTE DA EQUAÇÃO (4)
// ============================================

const UAl = calcularU(300, aluminio.theta);

console.log("=================================");
console.log("TESTE DA EQUAÇÃO (4)");
console.log("=================================");
console.log("Material:", aluminio.nome);
console.log("Temperatura:", 300, "K");
console.log("Theta:", aluminio.theta, "K");
console.log("U =", UAl.toFixed(6), "J/mol");
console.log("=================================");

console.log("=================================");
