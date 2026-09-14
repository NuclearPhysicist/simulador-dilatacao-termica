// ============================================================
// MATERIAIS — DILATAÇÃO TÉRMICA
// ============================================================
//
// Coeficiente de expansão linear médio
// Unidade: K⁻¹
//
// alpha = valor × 10⁻⁶ K⁻¹
//
// Tmin e Tmax = intervalo de temperatura em °C
//
// Fonte:
// Engineering ToolBox — Thermal Expansion of Metals
// ============================================================

const materiais = {

  // ==========================================================
  // METAIS E LIGAS DE ALUMÍNIO
  // ==========================================================

  aluminio: {
    nome: "Alumínio",
    simbolo: "Al",
    categoria: "Metal",
    alpha: 23.6e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  bronzeAluminio: {
    nome: "Bronze de alumínio",
    simbolo: "—",
    categoria: "Liga de cobre",
    alpha: 16.2e-6,
    Tmin: 20,
    Tmax: 300,
    unidade: "K⁻¹"
  },

  ligaAluminio2011: {
    nome: "Liga de alumínio 2011",
    simbolo: "Al 2011",
    categoria: "Liga de alumínio",
    alpha: 23.0e-6,
    Tmin: 20,
    Tmax: 300,
    unidade: "K⁻¹"
  },

  ligaAluminio2017: {
    nome: "Liga de alumínio 2017",
    simbolo: "Al 2017",
    categoria: "Liga de alumínio",
    alpha: 23.6e-6,
    Tmin: 20,
    Tmax: 300,
    unidade: "K⁻¹"
  },

  ligaAluminio2024: {
    nome: "Liga de alumínio 2024",
    simbolo: "Al 2024",
    categoria: "Liga de alumínio",
    alpha: 23.2e-6,
    Tmin: 20,
    Tmax: 300,
    unidade: "K⁻¹"
  },

  ligaAluminio3003: {
    nome: "Liga de alumínio 3003",
    simbolo: "Al 3003",
    categoria: "Liga de alumínio",
    alpha: 23.2e-6,
    Tmin: 20,
    Tmax: 300,
    unidade: "K⁻¹"
  },

  ligaAluminio5052: {
    nome: "Liga de alumínio 5052",
    simbolo: "Al 5052",
    categoria: "Liga de alumínio",
    alpha: 23.8e-6,
    Tmin: 20,
    Tmax: 300,
    unidade: "K⁻¹"
  },

  ligaAluminio5086: {
    nome: "Liga de alumínio 5086",
    simbolo: "Al 5086",
    categoria: "Liga de alumínio",
    alpha: 23.8e-6,
    Tmin: 20,
    Tmax: 300,
    unidade: "K⁻¹"
  },

  ligaAluminio6061: {
    nome: "Liga de alumínio 6061",
    simbolo: "Al 6061",
    categoria: "Liga de alumínio",
    alpha: 23.4e-6,
    Tmin: 20,
    Tmax: 300,
    unidade: "K⁻¹"
  },

  ligaAluminio7075: {
    nome: "Liga de alumínio 7075",
    simbolo: "Al 7075",
    categoria: "Liga de alumínio",
    alpha: 23.6e-6,
    Tmin: 20,
    Tmax: 300,
    unidade: "K⁻¹"
  },

  // ==========================================================
  // METAIS
  // ==========================================================

  antimonio: {
    nome: "Antimônio",
    simbolo: "Sb",
    categoria: "Metal",
    alpha: 9.0e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  berilio: {
    nome: "Berílio",
    simbolo: "Be",
    categoria: "Metal",
    alpha: 12.1e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  cobreBerilio: {
    nome: "Cobre-berílio",
    simbolo: "Cu-Be",
    categoria: "Liga de cobre",
    alpha: 16.7e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  bismuto: {
    nome: "Bismuto",
    simbolo: "Bi",
    categoria: "Metal",
    alpha: 13.0e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  cromo: {
    nome: "Cromo",
    simbolo: "Cr",
    categoria: "Metal",
    alpha: 5.94e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  cobalto: {
    nome: "Cobalto",
    simbolo: "Co",
    categoria: "Metal",
    alpha: 12.1e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  cobre: {
    nome: "Cobre",
    simbolo: "Cu",
    categoria: "Metal",
    alpha: 17.6e-6,
    Tmin: 20,
    Tmax: 300,
    unidade: "K⁻¹"
  },

  cuproniquel: {
    nome: "Cuproníquel",
    simbolo: "Cu-Ni",
    categoria: "Liga de cobre",
    alpha: 16.2e-6,
    Tmin: 20,
    Tmax: 300,
    unidade: "K⁻¹"
  },

  ouro: {
    nome: "Ouro",
    simbolo: "Au",
    categoria: "Metal",
    alpha: 14.2e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  iridio: {
    nome: "Irídio",
    simbolo: "Ir",
    categoria: "Metal",
    alpha: 5.94e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  magnesio: {
    nome: "Magnésio",
    simbolo: "Mg",
    categoria: "Metal",
    alpha: 25.2e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  manganes: {
    nome: "Manganês",
    simbolo: "Mn",
    categoria: "Metal",
    alpha: 21.6e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  molibdenio: {
    nome: "Molibdênio",
    simbolo: "Mo",
    categoria: "Metal",
    alpha: 5.4e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  niobio: {
    nome: "Nióbio",
    simbolo: "Nb",
    categoria: "Metal",
    alpha: 7.02e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  osmio: {
    nome: "Ósmio",
    simbolo: "Os",
    categoria: "Metal",
    alpha: 5.04e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  platina: {
    nome: "Platina",
    simbolo: "Pt",
    categoria: "Metal",
    alpha: 9.0e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  plutonio: {
    nome: "Plutônio",
    simbolo: "Pu",
    categoria: "Metal",
    alpha: 35.7e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  potassio: {
    nome: "Potássio",
    simbolo: "K",
    categoria: "Metal alcalino",
    alpha: 82.8e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  rodio: {
    nome: "Ródio",
    simbolo: "Rh",
    categoria: "Metal",
    alpha: 7.92e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  selenio: {
    nome: "Selênio",
    simbolo: "Se",
    categoria: "Semimetal",
    alpha: 37.8e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  silicio: {
    nome: "Silício",
    simbolo: "Si",
    categoria: "Semicondutor",
    alpha: 5.04e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  prata: {
    nome: "Prata",
    simbolo: "Ag",
    categoria: "Metal",
    alpha: 19.8e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  sodio: {
    nome: "Sódio",
    simbolo: "Na",
    categoria: "Metal alcalino",
    alpha: 70.2e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  tantalo: {
    nome: "Tântalo",
    simbolo: "Ta",
    categoria: "Metal",
    alpha: 6.48e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  torio: {
    nome: "Tório",
    simbolo: "Th",
    categoria: "Metal",
    alpha: 12.1e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  estanho: {
    nome: "Estanho",
    simbolo: "Sn",
    categoria: "Metal",
    alpha: 23.0e-6,
    Tmin: 0,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  titanio: {
    nome: "Titânio",
    simbolo: "Ti",
    categoria: "Metal",
    alpha: 8.64e-6,
    Tmin: 20,
    Tmax: 93.3,
    unidade: "K⁻¹"
  },

  ligaTitanioTi5Al25Sn: {
    nome: "Liga de titânio Ti-5Al-2,5Sn",
    simbolo: "Ti-5Al-2,5Sn",
    categoria: "Liga de titânio",
    alpha: 9.54e-6,
    Tmin: 20,
    Tmax: 93.3,
    unidade: "K⁻¹"
  },

  ti8Mn: {
    nome: "Liga de titânio Ti-8Mn",
    simbolo: "Ti-8Mn",
    categoria: "Liga de titânio",
    alpha: 10.8e-6,
    Tmin: 20,
    Tmax: 93.3,
    unidade: "K⁻¹"
  },

  tungstenio: {
    nome: "Tungstênio",
    simbolo: "W",
    categoria: "Metal",
    alpha: 4.5e-6,
    Tmin: 20,
    Tmax: 93.3,
    unidade: "K⁻¹"
  },

  uranio: {
    nome: "Urânio",
    simbolo: "U",
    categoria: "Metal",
    alpha: 13.3e-6,
    Tmin: 20,
    Tmax: 93.3,
    unidade: "K⁻¹"
  },

  vanadio: {
    nome: "Vanádio",
    simbolo: "V",
    categoria: "Metal",
    alpha: 7.92e-6,
    Tmin: 20,
    Tmax: 93.3,
    unidade: "K⁻¹"
  },

  zinco: {
    nome: "Zinco",
    simbolo: "Zn",
    categoria: "Metal",
    alpha: 34.2e-6,
    Tmin: 20,
    Tmax: 93.3,
    unidade: "K⁻¹"
  },

  // ==========================================================
  // FERROS E AÇOS
  // ==========================================================

  ferroFundidoCinza: {
    nome: "Ferro fundido cinzento",
    simbolo: "Fe",
    categoria: "Ferro fundido",
    alpha: 10.4e-6,
    Tmin: 0,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  acoFundido3Carbono: {
    nome: "Aço fundido, 3% de carbono",
    simbolo: "Fe-C",
    categoria: "Aço",
    alpha: 7.0e-6,
    Tmin: 0,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  ferroNodularPerlitico: {
    nome: "Ferro nodular perlítico",
    simbolo: "Fe",
    categoria: "Ferro fundido",
    alpha: 11.7e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  ferroPuro: {
    nome: "Ferro puro",
    simbolo: "Fe",
    categoria: "Metal",
    alpha: 12.2e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  acoMacio: {
    nome: "Aço de baixo carbono",
    simbolo: "Fe-C",
    categoria: "Aço",
    alpha: 10.6e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  acoCarbonoLaminado: {
    nome: "Aço carbono laminado",
    simbolo: "Fe-C",
    categoria: "Aço",
    alpha: 14.0e-6,
    Tmin: 21.1,
    Tmax: 427,
    unidade: "K⁻¹"
  },

  ferroDuctilA536: {
    nome: "Ferro dúctil A536 (120-90-02)",
    simbolo: "Fe",
    categoria: "Ferro fundido",
    alphaMin: 10.6e-6,
    alphaMax: 11.2e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  ferroMaleavelA220: {
    nome: "Ferro maleável A220 (50005, 60004, 80002)",
    simbolo: "Fe",
    categoria: "Ferro fundido",
    alpha: 13.5e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  // ==========================================================
  // INVAR E KOVAR
  // ==========================================================

  invar: {
    nome: "Invar",
    simbolo: "Fe-Ni",
    categoria: "Liga metálica",
    alpha: 1.21e-6,
    Tmin: 20,
    Tmax: 100,
    unidade: "K⁻¹"
  },

  kovar25_200: {
    nome: "Kovar",
    simbolo: "Fe-Ni-Co",
    categoria: "Liga metálica",
    alpha: 5.49e-6,
    Tmin: 25,
    Tmax: 200,
    unidade: "K⁻¹"
  },

  kovar25_300: {
    nome: "Kovar",
    simbolo: "Fe-Ni-Co",
    categoria: "Liga metálica",
    alpha: 5.09e-6,
    Tmin: 25,
    Tmax: 300,
    unidade: "K⁻¹"
  },

  kovar25_400: {
    nome: "Kovar",
    simbolo: "Fe-Ni-Co",
    categoria: "Liga metálica",
    alpha: 4.9e-6,
    Tmin: 25,
    Tmax: 400,
    unidade: "K⁻¹"
  },

  kovar25_500: {
    nome: "Kovar",
    simbolo: "Fe-Ni-Co",
    categoria: "Liga metálica",
    alpha: 6.19e-6,
    Tmin: 25,
    Tmax: 500,
    unidade: "K⁻¹"
  }

};
