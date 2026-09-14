// ============================================================
// MATERIAIS — DILATAÇÃO TÉRMICA
// ============================================================
//
// Coeficiente de expansão linear médio
// Unidade: K⁻¹
//
// alpha = valor × 10⁻⁶ K⁻¹
//
// Tmin e Tmax = faixa de temperatura em °C
//
// Fonte dos dados:
// Engineering ToolBox — Thermal Expansion of Metals
// ============================================================


const materiais = {

    // ========================================================
    // A
    // ========================================================

    admiraltyBrass: {
        nome: "Latão do Almirantado",
        simbolo: "—",
        categoria: "Liga de cobre",
        alpha: 20.2e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

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
        Tmax: 100,
        unidade: "K⁻¹"
    },

    ligaAluminio2017: {
        nome: "Liga de alumínio 2017",
        simbolo: "Al 2017",
        categoria: "Liga de alumínio",
        alpha: 23.6e-6,
        Tmin: 20,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    ligaAluminio2024: {
        nome: "Liga de alumínio 2024",
        simbolo: "Al 2024",
        categoria: "Liga de alumínio",
        alpha: 23.2e-6,
        Tmin: 20,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    ligaAluminio3003: {
        nome: "Liga de alumínio 3003",
        simbolo: "Al 3003",
        categoria: "Liga de alumínio",
        alpha: 23.2e-6,
        Tmin: 20,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    ligaAluminio5052: {
        nome: "Liga de alumínio 5052",
        simbolo: "Al 5052",
        categoria: "Liga de alumínio",
        alpha: 23.8e-6,
        Tmin: 20,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    ligaAluminio5086: {
        nome: "Liga de alumínio 5086",
        simbolo: "Al 5086",
        categoria: "Liga de alumínio",
        alpha: 23.8e-6,
        Tmin: 20,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    ligaAluminio6061: {
        nome: "Liga de alumínio 6061",
        simbolo: "Al 6061",
        categoria: "Liga de alumínio",
        alpha: 23.4e-6,
        Tmin: 20,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    ligaAluminio7075: {
        nome: "Liga de alumínio 7075",
        simbolo: "Al 7075",
        categoria: "Liga de alumínio",
        alpha: 23.6e-6,
        Tmin: 20,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    antimonio: {
        nome: "Antimônio",
        simbolo: "Sb",
        categoria: "Semimetal",
        alpha: 9.0e-6,
        Tmin: 20,
        Tmax: 100,
        unidade: "K⁻¹"
    },


    // ========================================================
    // B
    // ========================================================

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


    // ========================================================
    // C
    // ========================================================

    acoFundido3Carbono: {
        nome: "Aço fundido, 3% de carbono",
        simbolo: "Fe-C",
        categoria: "Aço",
        alpha: 7.0e-6,
        Tmin: 0,
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

    cobalto: {
        nome: "Cobalto",
        simbolo: "Co",
        categoria: "Metal",
        alpha: 12.1e-6,
        Tmin: 0,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    cromo: {
        nome: "Cromo",
        simbolo: "Cr",
        categoria: "Metal",
        alpha: 5.94e-6,
        Tmin: 0,
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

    cobreC1100: {
        nome: "Cobre C1100",
        simbolo: "Cu C1100",
        categoria: "Liga de cobre",
        alpha: 17.6e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC14500: {
        nome: "Cobre C14500",
        simbolo: "Cu C14500",
        categoria: "Liga de cobre",
        alpha: 17.8e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC17200C17300: {
        nome: "Cobre C17200/C17300 — Cobre-berílio",
        simbolo: "Cu-Be",
        categoria: "Liga de cobre",
        alpha: 17.8e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC18200: {
        nome: "Cobre C18200 — Cobre-cromo",
        simbolo: "Cu-Cr",
        categoria: "Liga de cobre",
        alpha: 17.6e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC18700: {
        nome: "Cobre C18700 — Cobre com chumbo",
        simbolo: "Cu-Pb",
        categoria: "Liga de cobre",
        alpha: 17.6e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC22000: {
        nome: "Cobre C22000 — Bronze comercial (90%)",
        simbolo: "Cu",
        categoria: "Liga de cobre",
        alpha: 18.4e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC23000: {
        nome: "Cobre C23000 — Latão vermelho (85%)",
        simbolo: "Cu-Zn",
        categoria: "Liga de cobre",
        alpha: 18.7e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC26000: {
        nome: "Cobre C26000 — Latão para cartuchos (70%)",
        simbolo: "Cu-Zn",
        categoria: "Liga de cobre",
        alpha: 20.0e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC27000: {
        nome: "Cobre C27000 — Latão amarelo",
        simbolo: "Cu-Zn",
        categoria: "Liga de cobre",
        alpha: 20.3e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC28000: {
        nome: "Cobre C28000 — Metal Muntz (60%)",
        simbolo: "Cu-Zn",
        categoria: "Liga de cobre",
        alpha: 20.9e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC33000: {
        nome: "Cobre C33000 — Tubo de latão com baixo chumbo",
        simbolo: "Cu-Zn-Pb",
        categoria: "Liga de cobre",
        alpha: 20.2e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC35300: {
        nome: "Cobre C35300 — Latão com alto chumbo",
        simbolo: "Cu-Zn-Pb",
        categoria: "Liga de cobre",
        alpha: 20.3e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC35600: {
        nome: "Cobre C35600 — Latão com teor extra alto de chumbo",
        simbolo: "Cu-Zn-Pb",
        categoria: "Liga de cobre",
        alpha: 20.5e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC36000: {
        nome: "Cobre C36000 — Latão de usinagem livre",
        simbolo: "Cu-Zn-Pb",
        categoria: "Liga de cobre",
        alpha: 20.5e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC36500: {
        nome: "Cobre C36500 — Metal Muntz com chumbo",
        simbolo: "Cu-Zn-Pb",
        categoria: "Liga de cobre",
        alpha: 20.9e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC46400: {
        nome: "Cobre C46400 — Latão naval",
        simbolo: "Cu-Zn",
        categoria: "Liga de cobre",
        alpha: 21.2e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC51000: {
        nome: "Cobre C51000 — Bronze fosforoso (5% A)",
        simbolo: "Cu-Sn-P",
        categoria: "Liga de cobre",
        alpha: 17.8e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC54400: {
        nome: "Cobre C54400 — Bronze fosforoso de corte livre",
        simbolo: "Cu-Sn-P",
        categoria: "Liga de cobre",
        alpha: 17.3e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC62300: {
        nome: "Cobre C62300 — Bronze de alumínio (9%)",
        simbolo: "Cu-Al",
        categoria: "Liga de cobre",
        alpha: 16.2e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC62400: {
        nome: "Cobre C62400 — Bronze de alumínio (11%)",
        simbolo: "Cu-Al",
        categoria: "Liga de cobre",
        alpha: 16.6e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreC63000: {
        nome: "Cobre C63000 — Bronze níquel-alumínio",
        simbolo: "Cu-Ni-Al",
        categoria: "Liga de cobre",
        alpha: 16.2e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    cobreNiquelPrata: {
        nome: "Cobre — Alpaca (níquel-prata)",
        simbolo: "Cu-Ni-Zn",
        categoria: "Liga de cobre",
        alpha: 16.2e-6,
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


    // ========================================================
    // E
    // ========================================================

    estanho: {
        nome: "Estanho",
        simbolo: "Sn",
        categoria: "Metal",
        alpha: 23.0e-6,
        Tmin: 0,
        Tmax: 100,
        unidade: "K⁻¹"
    },


    // ========================================================
    // F
    // ========================================================

    ferroDuctilA536: {
        nome: "Ferro dúctil A536 (120-90-02)",
        simbolo: "Fe",
        categoria: "Ferro fundido",
        alpha: 10.9e-6,
        alphaOriginal: "10,6–11,2 × 10⁻⁶ K⁻¹",
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    ferroFundidoCinza: {
        nome: "Ferro fundido cinzento",
        simbolo: "Fe",
        categoria: "Ferro fundido",
        alpha: 10.4e-6,
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

    ferroMaleavelA220: {
        nome: "Ferro maleável A220 (50005, 60004, 80002)",
        simbolo: "Fe",
        categoria: "Ferro fundido",
        alpha: 13.5e-6,
        Tmin: 20,
        Tmax: 500,
        unidade: "K⁻¹"
    },


    // ========================================================
    // H
    // ========================================================

    hastelloyC: {
        nome: "Hastelloy C",
        simbolo: "Ni-Cr-Mo",
        categoria: "Liga à base de níquel",
        alpha: 9.54e-6,
        Tmin: 21.1,
        Tmax: 93.3,
        unidade: "K⁻¹"
    },


    // ========================================================
    // I
    // ========================================================

    inconel: {
        nome: "Inconel",
        simbolo: "Ni-Cr",
        categoria: "Liga à base de níquel",
        alpha: 11.5e-6,
        Tmin: 20,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    incoloy: {
        nome: "Incoloy",
        simbolo: "Ni-Fe-Cr",
        categoria: "Liga à base de níquel",
        alpha: 14.4e-6,
        Tmin: 0,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    invar: {
        nome: "Invar",
        simbolo: "Fe-Ni",
        categoria: "Liga metálica",
        alpha: 1.21e-6,
        Tmin: 20,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    iridio: {
        nome: "Irídio",
        simbolo: "Ir",
        categoria: "Metal",
        alpha: 5.94e-6,
        Tmin: 0,
        Tmax: 100,
        unidade: "K⁻¹"
    },


    // ========================================================
    // K
    // ========================================================

    kovar1: {
        nome: "Kovar 1",
        simbolo: "Fe-Ni-Co",
        categoria: "Liga metálica",
        alpha: 5.49e-6,
        Tmin: 25,
        Tmax: 200,
        unidade: "K⁻¹"
    },

    kovar2: {
        nome: "Kovar 2",
        simbolo: "Fe-Ni-Co",
        categoria: "Liga metálica",
        alpha: 5.09e-6,
        Tmin: 25,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    kovar3: {
        nome: "Kovar 3",
        simbolo: "Fe-Ni-Co",
        categoria: "Liga metálica",
        alpha: 4.90e-6,
        Tmin: 25,
        Tmax: 400,
        unidade: "K⁻¹"
    },

    kovar4: {
        nome: "Kovar 4",
        simbolo: "Fe-Ni-Co",
        categoria: "Liga metálica",
        alpha: 6.19e-6,
        Tmin: 25,
        Tmax: 500,
        unidade: "K⁻¹"
    },


    // ========================================================
    // L
    // ========================================================

    // ========================================================
    // M
    // ========================================================

    magnesio: {
        nome: "Magnésio",
        simbolo: "Mg",
        categoria: "Metal",
        alpha: 25.2e-6,
        Tmin: 25,
        Tmax: 500,
        unidade: "K⁻¹"
    },

    ferroMaleavel: {
        nome: "Ferro maleável A220 (50005, 60004, 80002)",
        simbolo: "Fe",
        categoria: "Ferro fundido",
        alpha: 13.5e-6,
        Tmin: 25,
        Tmax: 500,
        unidade: "K⁻¹"
    },

    manganes: {
        nome: "Manganês",
        simbolo: "Mn",
        categoria: "Metal",
        alpha: 21.6e-6,
        Tmin: 25,
        Tmax: 500,
        unidade: "K⁻¹"
    },

    manganesBronze: {
        nome: "Manganês — Bronze de manganês",
        simbolo: "Cu-Mn",
        categoria: "Liga de cobre",
        alpha: 21.2e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    molibdenio: {
        nome: "Molibdênio",
        simbolo: "Mo",
        categoria: "Metal",
        alpha: 5.4e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    monel: {
        nome: "Monel",
        simbolo: "Ni-Cu",
        categoria: "Liga à base de níquel",
        alpha: 14.0e-6,
        Tmin: 0,
        Tmax: 100,
        unidade: "K⁻¹"
    },


    // ========================================================
    // N
    // ========================================================

    niquelBase200201205: {
        nome: "Níquel — Liga 200, 201, 205",
        simbolo: "Ni",
        categoria: "Liga à base de níquel",
        alpha: 15.3e-6,
        Tmin: 0,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    hastelloyC22: {
        nome: "Níquel — Hastelloy C-22",
        simbolo: "Ni-Cr-Mo",
        categoria: "Liga à base de níquel",
        alpha: 12.4e-6,
        Tmin: 0,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    hastelloyC276: {
        nome: "Níquel — Hastelloy C-276",
        simbolo: "Ni-Cr-Mo",
        categoria: "Liga à base de níquel",
        alpha: 11.2e-6,
        Tmin: 0,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    inconel718: {
        nome: "Níquel — Inconel 718",
        simbolo: "Ni-Cr-Fe",
        categoria: "Liga à base de níquel",
        alpha: 13.0e-6,
        Tmin: 0,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    niquelMonel: {
        nome: "Níquel — Monel",
        simbolo: "Ni-Cu",
        categoria: "Liga à base de níquel",
        alpha: 15.7e-6,
        Tmin: 0,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    niquelMonel400: {
        nome: "Níquel — Monel 400",
        simbolo: "Ni-Cu",
        categoria: "Liga à base de níquel",
        alpha: 13.9e-6,
        Tmin: 0,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    niquelK500: {
        nome: "Níquel — K500",
        simbolo: "Ni-Cu-Al",
        categoria: "Liga à base de níquel",
        alpha: 13.7e-6,
        Tmin: 0,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    niquelR405: {
        nome: "Níquel — R405",
        simbolo: "Ni-Cu",
        categoria: "Liga à base de níquel",
        alpha: 13.7e-6,
        Tmin: 0,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    niquelTrabalhado: {
        nome: "Níquel trabalhado",
        simbolo: "Ni",
        categoria: "Metal",
        alpha: 13.3e-6,
        Tmin: 25,
        Tmax: 100,
        unidade: "K⁻¹"
    },

    niobio: {
        nome: "Nióbio",
        simbolo: "Nb",
        categoria: "Metal",
        alpha: 7.02e-6,
        Tmin: 0,
        Tmax: 100,
        unidade: "K⁻¹"
    },


    // ========================================================
    // O
    // ========================================================

    ouro: {
        nome: "Ouro",
        simbolo: "Au",
        categoria: "Metal",
        alpha: 14.2e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    osmio: {
        nome: "Ósmio",
        simbolo: "Os",
        categoria: "Metal",
        alpha: 5.04e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },


    // ========================================================
    // P
    // ========================================================

    platina: {
        nome: "Platina",
        simbolo: "Pt",
        categoria: "Metal",
        alpha: 9.0e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    plutonio: {
        nome: "Plutônio",
        simbolo: "Pu",
        categoria: "Metal",
        alpha: 35.7e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    potassio: {
        nome: "Potássio",
        simbolo: "K",
        categoria: "Metal alcalino",
        alpha: 82.8e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },


    // ========================================================
    // R
    // ========================================================

    redBrass: {
        nome: "Red Brass (Latão vermelho)",
        simbolo: "Cu-Zn",
        categoria: "Liga de cobre",
        alpha: 18.7e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    rodio: {
        nome: "Ródio",
        simbolo: "Rh",
        categoria: "Metal",
        alpha: 7.92e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },


    // ========================================================
    // S
    // ========================================================

    selenio: {
        nome: "Selênio",
        simbolo: "Se",
        categoria: "Semimetal",
        alpha: 37.8e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    silicio: {
        nome: "Silício",
        simbolo: "Si",
        categoria: "Semicondutor",
        alpha: 5.04e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    prata: {
        nome: "Prata",
        simbolo: "Ag",
        categoria: "Metal",
        alpha: 19.8e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    sodio: {
        nome: "Sódio",
        simbolo: "Na",
        categoria: "Metal alcalino",
        alpha: 70.2e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },


    // ========================================================
    // AÇOS INOXIDÁVEIS
    // ========================================================

    inoxS30100: {
        nome: "Aço inoxidável S30100",
        simbolo: "Fe-Cr-Ni",
        categoria: "Aço inoxidável",
        alpha: 16.9e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS30200S30300S30323: {
        nome: "Aço inoxidável S30200, S30300, S30323",
        simbolo: "Fe-Cr-Ni",
        categoria: "Aço inoxidável",
        alpha: 17.3e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS30215: {
        nome: "Aço inoxidável S30215",
        simbolo: "Fe-Cr-Ni",
        categoria: "Aço inoxidável",
        alpha: 16.2e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS30400S30500: {
        nome: "Aço inoxidável S30400, S30500",
        simbolo: "Fe-Cr-Ni",
        categoria: "Aço inoxidável",
        alpha: 17.3e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS30430: {
        nome: "Aço inoxidável S30430",
        simbolo: "Fe-Cr-Ni",
        categoria: "Aço inoxidável",
        alpha: 17.3e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS30800: {
        nome: "Aço inoxidável S30800",
        simbolo: "Fe-Cr-Ni",
        categoria: "Aço inoxidável",
        alpha: 17.3e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS30900S30908: {
        nome: "Aço inoxidável S30900, S30908",
        simbolo: "Fe-Cr-Ni",
        categoria: "Aço inoxidável",
        alpha: 14.9e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS31000S31008: {
        nome: "Aço inoxidável S31000, S31008",
        simbolo: "Fe-Cr-Ni",
        categoria: "Aço inoxidável",
        alpha: 15.8e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS31600S31700: {
        nome: "Aço inoxidável S31600, S31700",
        simbolo: "Fe-Cr-Ni-Mo",
        categoria: "Aço inoxidável",
        alpha: 15.8e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS31703: {
        nome: "Aço inoxidável S31703",
        simbolo: "Fe-Cr-Ni-Mo",
        categoria: "Aço inoxidável",
        alpha: 16.6e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS32100: {
        nome: "Aço inoxidável S32100",
        simbolo: "Fe-Cr-Ni-Ti",
        categoria: "Aço inoxidável",
        alpha: 16.6e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS34700: {
        nome: "Aço inoxidável S34700",
        simbolo: "Fe-Cr-Ni-Nb",
        categoria: "Aço inoxidável",
        alpha: 16.6e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS34800: {
        nome: "Aço inoxidável S34800",
        simbolo: "Fe-Cr-Ni-Nb",
        categoria: "Aço inoxidável",
        alpha: 16.7e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS38400: {
        nome: "Aço inoxidável S38400",
        simbolo: "Fe-Cr-Ni",
        categoria: "Aço inoxidável",
        alpha: 17.3e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS40300S41000S41600: {
        nome: "Aço inoxidável S40300, S41000, S41600, 41623",
        simbolo: "Fe-Cr",
        categoria: "Aço inoxidável",
        alpha: 9.9e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS40500: {
        nome: "Aço inoxidável S40500",
        simbolo: "Fe-Cr",
        categoria: "Aço inoxidável",
        alpha: 10.8e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS41400: {
        nome: "Aço inoxidável S41400",
        simbolo: "Fe-Cr",
        categoria: "Aço inoxidável",
        alpha: 10.4e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS42000S42020: {
        nome: "Aço inoxidável S42000, S42020",
        simbolo: "Fe-Cr-C",
        categoria: "Aço inoxidável",
        alpha: 10.3e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS42200: {
        nome: "Aço inoxidável S42200",
        simbolo: "Fe-Cr",
        categoria: "Aço inoxidável",
        alpha: 11.2e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS42900: {
        nome: "Aço inoxidável S42900",
        simbolo: "Fe-Cr",
        categoria: "Aço inoxidável",
        alpha: 10.3e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS43000S43020S43023: {
        nome: "Aço inoxidável S43000, S43020, S43023",
        simbolo: "Fe-Cr",
        categoria: "Aço inoxidável",
        alpha: 10.4e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS43600: {
        nome: "Aço inoxidável S43600",
        simbolo: "Fe-Cr",
        categoria: "Aço inoxidável",
        alpha: 9.36e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS44002S44004: {
        nome: "Aço inoxidável S44002, S44004",
        simbolo: "Fe-Cr-C",
        categoria: "Aço inoxidável",
        alpha: 10.3e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS44003: {
        nome: "Aço inoxidável S44003",
        simbolo: "Fe-Cr-C",
        categoria: "Aço inoxidável",
        alpha: 10.1e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS44600: {
        nome: "Aço inoxidável S44600",
        simbolo: "Fe-Cr",
        categoria: "Aço inoxidável",
        alpha: 10.4e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    inoxS50100S50200: {
        nome: "Aço inoxidável S50100, S50200",
        simbolo: "Fe-Cr",
        categoria: "Aço inoxidável",
        alpha: 11.2e-6,
        Tmin: 20,
        Tmax: 300,
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
        
    // ========================================================
    // T
    // ========================================================

    tantalio: {
        nome: "Tântalo",
        simbolo: "Ta",
        categoria: "Metal",
        alpha: 6.48e-6,
        Tmin: 20,
        Tmax: 300,
        unidade: "K⁻¹"
    },

    torio: {
        nome: "Tório",
        simbolo: "Th",
        categoria: "Metal",
        alpha: 12.1e-6,
        Tmin: 20,
        Tmax: 300,
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

    titanioTi5Al25Sn: {
        nome: "Titânio — Ti-5Al-2,5Sn",
        simbolo: "Ti-5Al-2,5Sn",
        categoria: "Liga de titânio",
        alpha: 9.54e-6,
        Tmin: 20,
        Tmax: 93.3,
        unidade: "K⁻¹"
    },

    titanioTi8Mn: {
        nome: "Titânio — Ti-8Mn",
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


    // ========================================================
    // U
    // ========================================================

    uranio: {
        nome: "Urânio",
        simbolo: "U",
        categoria: "Metal",
        alpha: 13.3e-6,
        Tmin: 20,
        Tmax: 93.3,
        unidade: "K⁻¹"
    },


    // ========================================================
    // V
    // ========================================================

    vanadio: {
        nome: "Vanádio",
        simbolo: "V",
        categoria: "Metal",
        alpha: 7.92e-6,
        Tmin: 20,
        Tmax: 93.3,
        unidade: "K⁻¹"
    },


    // ========================================================
    // Z
    // ========================================================

    zinco: {
        nome: "Zinco",
        simbolo: "Zn",
        categoria: "Metal",
        alpha: 34.2e-6,
        Tmin: 20,
        Tmax: 93.3,
        unidade: "K⁻¹"
    },

};
