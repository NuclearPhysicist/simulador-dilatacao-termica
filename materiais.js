// ============================================================
// MATERIAIS — DILATAÇÃO TÉRMICA
// ============================================================
//
// Coeficientes da função quadrática de dilatação térmica
// segundo Papadakis (1972)
//
// (L - L25) / L25 = B0 × 10⁻³
//                  + B1 × 10⁻⁶ × T
//                  + B2 × 10⁻⁹ × T²
//
// T = temperatura em °C
// L25 = comprimento na temperatura de referência de 25 °C
//
// Tmin = 25 °C
// Tmax = limite superior de validade da função
//
// rho = densidade em g/cm³
//
// ============================================================

const materiais = {

    aluminio: {
        nome: "Alumínio",
        simbolo: "Al",
        categoria: "Elemento",
        B0: -0.583,
        B1: 23.107,
        B2: 8.024,
        rho: 2.71,
        Tmin: 25,
        Tmax: 595,
        unidade: "K⁻¹",
        imagem: "assets/materiais/aluminio.png"
    },

    berilio: {
        nome: "Berílio",
        simbolo: "Be",
        categoria: "Elemento",
        B0: -0.336,
        B1: 13.273,
        B2: 7.079,
        rho: 1.86,
        Tmin: 25,
        Tmax: 1095,
        unidade: "K⁻¹",
        imagem: "assets/materiais/berilio.png"
    },

    cerio: {
        nome: "Cério",
        simbolo: "Ce",
        categoria: "Elemento",
        B0: -0.149,
        B1: 5.927,
        B2: 1.810,
        rho: 6.77,
        Tmin: 25,
        Tmax: 725,
        unidade: "K⁻¹",
        imagem: "assets/materiais/cerio.png"
    },

    cromo: {
        nome: "Cromo",
        simbolo: "Cr",
        categoria: "Elemento",
        B0: -0.142,
        B1: 5.556,
        B2: 5.189,
        rho: 7.16,
        Tmin: 25,
        Tmax: 1600,
        unidade: "K⁻¹",
        imagem: "assets/materiais/cromo.png"
    },

    cobalto: {
        nome: "Cobalto",
        simbolo: "Co",
        categoria: "Elemento",
        condicao: "Transformação a 400 °C",
        B0: -0.352,
        B1: 14.082,
        B2: 0.022,
        rho: 8.90,
        Tmin: 25,
        Tmax: 400,
        unidade: "K⁻¹",
        imagem: "assets/materiais/cobalto.png"
    },

    cobre: {
        nome: "Cobre",
        simbolo: "Cu",
        categoria: "Elemento",
        B0: -0.401,
        B1: 15.942,
        B2: 4.473,
        rho: 8.94,
        Tmin: 25,
        Tmax: 1000,
        unidade: "K⁻¹",
        imagem: "assets/materiais/cobre.png"
    },

    diamante: {
        nome: "Diamante",
        simbolo: "C",
        categoria: "Carbono",
        condicao: "Constantes de rede medidas por difração de raios X",
        B0: -0.047,
        B1: 1.850,
        B2: 1.648,
        rho: 3.52,
        Tmin: 25,
        Tmax: 1425,
        unidade: "K⁻¹",
        imagem: "assets/materiais/diamante.png"
    },

    disprosio: {
        nome: "Disprósio",
        simbolo: "Dy",
        categoria: "Elemento",
        B0: -0.224,
        B1: 8.859,
        B2: 3.425,
        rho: 8.56,
        Tmin: 25,
        Tmax: 1000,
        unidade: "K⁻¹",
        imagem: "assets/materiais/disprosio.png"
    },

    erbio: {
        nome: "Érbio",
        simbolo: "Er",
        categoria: "Elemento",
        B0: -0.207,
        B1: 8.185,
        B2: 4.555,
        rho: 9.06,
        Tmin: 25,
        Tmax: 900,
        unidade: "K⁻¹",
        imagem: "assets/materiais/erbio.png"
    },

    germanio: {
        nome: "Germânio",
        simbolo: "Ge",
        categoria: "Semicondutor",
        B0: -0.108,
        B1: 4.190,
        B2: 4.784,
        rho: 5.32,
        Tmin: 25,
        Tmax: 260,
        unidade: "K⁻¹",
        imagem: "assets/materiais/germanio.png"
    },

    ouro: {
        nome: "Ouro",
        simbolo: "Au",
        categoria: "Elemento",
        B0: -0.357,
        B1: 14.208,
        B2: 2.654,
        rho: 19.3,
        Tmin: 25,
        Tmax: 1000,
        unidade: "K⁻¹",
        imagem: "assets/materiais/ouro.png"
    },

    hafnio: {
        nome: "Háfnio",
        simbolo: "Hf",
        categoria: "Elemento",
        B0: -0.156,
        B1: 6.271,
        B2: -0.564,
        rho: 13.09,
        Tmin: 25,
        Tmax: 980,
        unidade: "K⁻¹",
        imagem: "assets/materiais/hafnio.png"
    },

    ferro: {
        nome: "Ferro",
        simbolo: "Fe",
        categoria: "Elemento",
        condicao: "Até o ponto de Curie",
        B0: -0.370,
        B1: 14.789,
        B2: -0.048,
        rho: 7.874,
        Tmin: 25,
        Tmax: 780,
        unidade: "K⁻¹",
        imagem: "assets/materiais/ferro.png"
    },

    lantanio: {
        nome: "Lantânio",
        simbolo: "La",
        categoria: "Elemento",
        condicao: "Região hexagonal",
        B0: -0.105,
        B1: 4.065,
        B2: 6.108,
        rho: 6.16,
        Tmin: 25,
        Tmax: 300,
        unidade: "K⁻¹",
        imagem: "assets/materiais/lantanio.png"
    },

    magnesio: {
        nome: "Magnésio",
        simbolo: "Mg",
        categoria: "Elemento",
        B0: -0.693,
        B1: 27.570,
        B2: 5.942,
        rho: 1.74,
        Tmin: 25,
        Tmax: 500,
        unidade: "K⁻¹",
        imagem: "assets/materiais/magnesio.png"
    },

    manganes: {
        nome: "Manganês",
        simbolo: "Mn",
        categoria: "Elemento",
        B0: -0.564,
        B1: 22.197,
        B2: 14.247,
        rho: 7.40,
        Tmin: 25,
        Tmax: 800,
        unidade: "K⁻¹",
        imagem: "assets/materiais/manganes.png"
    },

    molibdenio: {
        nome: "Molibdênio",
        simbolo: "Mo",
        categoria: "Metal refratário",
        B0: -0.097,
        B1: 3.835,
        B2: 1.640,
        rho: 10.24,
        Tmin: 25,
        Tmax: 2600,
        unidade: "K⁻¹",
        imagem: "assets/materiais/molibdenio.png"
    },

    neodimio: {
        nome: "Neodímio",
        simbolo: "Nd",
        categoria: "Elemento",
        B0: -0.150,
        B1: 5.929,
        B2: 3.219,
        rho: 7.00,
        Tmin: 25,
        Tmax: 900,
        unidade: "K⁻¹",
        imagem: "assets/materiais/neodimio.png"
    },

    niquel: {
        nome: "Níquel",
        simbolo: "Ni",
        categoria: "Elemento",
        B0: -0.307,
        B1: 12.177,
        B2: 4.077,
        rho: 8.90,
        Tmin: 25,
        Tmax: 1300,
        unidade: "K⁻¹",
        imagem: "assets/materiais/niquel.png"
    },

    niobio: {
        nome: "Nióbio",
        simbolo: "Nb",
        categoria: "Metal refratário",
        B0: -0.193,
        B1: 7.723,
        B2: 0.678,
        rho: 8.57,
        Tmin: 25,
        Tmax: 2200,
        unidade: "K⁻¹",
        imagem: "assets/materiais/niobio.png"
    },

    platina: {
        nome: "Platina",
        simbolo: "Pt",
        categoria: "Elemento",
        B0: -0.219,
        B1: 8.720,
        B2: 1.616,
        rho: 21.5,
        Tmin: 25,
        Tmax: 1700,
        unidade: "K⁻¹",
        imagem: "assets/materiais/platina.png"
    },

    praseodimio: {
        nome: "Praseodímio",
        simbolo: "Pr",
        categoria: "Elemento",
        B0: -0.112,
        B1: 4.413,
        B2: 2.897,
        rho: 6.77,
        Tmin: 25,
        Tmax: 800,
        unidade: "K⁻¹",
        imagem: "assets/materiais/praseodimio.png"
    },

    renio: {
        nome: "Rênio",
        simbolo: "Re",
        categoria: "Metal refratário",
        B0: -0.098,
        B1: 5.890,
        B2: 0.857,
        rho: 20.53,
        Tmin: 25,
        Tmax: 2500,
        unidade: "K⁻¹",
        imagem: "assets/materiais/renio.png"
    },

    silicio: {
        nome: "Silício",
        simbolo: "Si",
        categoria: "Semicondutor",
        B0: -0.079,
        B1: 3.152,
        B2: 0.585,
        rho: 2.33,
        Tmin: 25,
        Tmax: 1300,
        unidade: "K⁻¹",
        imagem: "assets/materiais/silicio.png"
    },

    prata: {
        nome: "Prata",
        simbolo: "Ag",
        categoria: "Elemento",
        B0: -0.455,
        B1: 18.083,
        B2: 4.803,
        rho: 10.5,
        Tmin: 25,
        Tmax: 900,
        unidade: "K⁻¹",
        imagem: "assets/materiais/prata.png"
    },

    tantalio: {
        nome: "Tântalo",
        simbolo: "Ta",
        categoria: "Metal refratário",
        B0: -0.141,
        B1: 5.593,
        B2: 1.184,
        rho: 16.6,
        Tmin: 25,
        Tmax: 2925,
        unidade: "K⁻¹",
        imagem: "assets/materiais/tantalio.png"
    },

    terbio: {
        nome: "Térbio",
        simbolo: "Tb",
        categoria: "Elemento",
        B0: -0.155,
        B1: 6.042,
        B2: 5.940,
        rho: 8.25,
        Tmin: 25,
        Tmax: 925,
        unidade: "K⁻¹",
        imagem: "assets/materiais/terbio.png"
    },

    torio: {
        nome: "Tório",
        simbolo: "Th",
        categoria: "Elemento",
        B0: -0.286,
        B1: 11.415,
        B2: 0.902,
        rho: 11.7,
        Tmin: 25,
        Tmax: 1025,
        unidade: "K⁻¹",
        imagem: "assets/materiais/torio.png"
    },

    titanio: {
        nome: "Titânio",
        simbolo: "Ti",
        categoria: "Elemento",
        B0: -0.214,
        B1: 8.521,
        B2: 0.797,
        rho: 4.60,
        Tmin: 25,
        Tmax: 825,
        unidade: "K⁻¹",
        imagem: "assets/materiais/titanio.png"
    },

    tungstenio: {
        nome: "Tungstênio",
        simbolo: "W",
        categoria: "Metal refratário",
        B0: -0.096,
        B1: 3.829,
        B2: 0.720,
        rho: 19.3,
        Tmin: 25,
        Tmax: 2125,
        unidade: "K⁻¹",
        imagem: "assets/materiais/tungstenio.png"
    },

    uranio: {
        nome: "Urânio",
        simbolo: "U",
        categoria: "Elemento",
        condicao: "Região alfa",
        B0: -0.375,
        B1: 14.863,
        B2: 4.707,
        rho: 19.1,
        Tmin: 25,
        Tmax: 625,
        unidade: "K⁻¹",
        imagem: "assets/materiais/uranio.png"
    },

    iterbio: {
        nome: "Itérbio",
        simbolo: "Yb",
        categoria: "Elemento",
        B0: -0.623,
        B1: 24.743,
        B2: 6.318,
        rho: 6.96,
        Tmin: 25,
        Tmax: 625,
        unidade: "K⁻¹",
        imagem: "assets/materiais/iterbio.png"
    },

    zirconio: {
        nome: "Zircônio",
        simbolo: "Zr",
        categoria: "Elemento",
        condicao: "Região alfa",
        B0: -0.135,
        B1: 5.342,
        B2: 2.317,
        rho: 6.50,
        Tmin: 25,
        Tmax: 725,
        unidade: "K⁻¹",
        imagem: "assets/materiais/zirconio.png"
    }

};
