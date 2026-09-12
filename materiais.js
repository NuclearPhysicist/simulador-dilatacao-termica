const materiais = {
  Ag: {
    nome: "Prata",
    simbolo: "Ag",
    estrutura: "fcc",
    k: 3.6897,
    Q0: 472.6139,
    theta: 214,
    thetaD: 225
  },

  Al: {
    nome: "Alumínio",
    simbolo: "Al",
    estrutura: "fcc",
    k: 4.4516,
    Q0: 379.106,
    theta: 367,
    thetaD: 428
  },

  Au: {
    nome: "Ouro",
    simbolo: "Au",
    estrutura: "fcc",
    k: 4.6685,
    Q0: 639.1281,
    theta: 161,
    thetaD: 165
  },

  Be: {
    nome: "Berílio",
    simbolo: "Be",
    estrutura: "hcp",
    k: 2.618,
    Q0: 476.6529,
    theta: 957,
    thetaD: 1440
  },

  Bi: {
    nome: "Bismuto",
    simbolo: "Bi",
    estrutura: "hcp",
    k: 0.0866,
    Q0: 633.1196,
    theta: 121,
    thetaD: 119
  },

  Ca: {
    nome: "Cálcio",
    simbolo: "Ca",
    estrutura: "fcc",
    k: 1.7932,
    Q0: 386.3696,
    theta: 231,
    thetaD: 230
  },

  Cd: {
    nome: "Cádmio",
    simbolo: "Cd",
    estrutura: "hcp",
    k: 3.7944,
    Q0: 307.0226,
    theta: 112,
    thetaD: 209
  },

  Co_hcp: {
    nome: "Cobalto",
    simbolo: "Co",
    estrutura: "hcp",
    k: 4.6481,
    Q0: 624.3493,
    theta: 388,
    thetaD: 445
  },

  Co_fcc: {
    nome: "Cobalto",
    simbolo: "Co",
    estrutura: "fcc",
    k: 2.2879,
    Q0: 625.7783,
    theta: 385,
    thetaD: 385
  },

  Cr: {
    nome: "Cromo",
    simbolo: "Cr",
    estrutura: "bcc",
    k: 7.9455,
    Q0: 971.7697,
    theta: 750,
    thetaD: 630
  },

  Cu: {
    nome: "Cobre",
    simbolo: "Cu",
    estrutura: "fcc",
    k: 3.5344,
    Q0: 511.9897,
    theta: 315,
    thetaD: 343
  },

  Fe_bcc: {
    nome: "Ferro",
    simbolo: "Fe",
    estrutura: "bcc",
    k: 0.2853,
    Q0: 608.3791,
    theta: 488,
    thetaD: 470
  },

  Fe_fcc: {
    nome: "Ferro",
    simbolo: "Fe",
    estrutura: "fcc",
    k: 0.2061,
    Q0: 340.6442,
    theta: 420,
    thetaD: 420
  },

  Ge: {
    nome: "Germânio",
    simbolo: "Ge",
    estrutura: "fcc",
    k: 5.0997,
    Q0: 1286.255,
    theta: 515,
    thetaD: 374
  },

  Hf: {
    nome: "Háfnio",
    simbolo: "Hf",
    estrutura: "hcp",
    k: 8.5687,
    Q0: 1477.475,
    theta: 160,
    thetaD: 252
  },

  In: {
    nome: "Índio",
    simbolo: "In",
    estrutura: "hcp",
    k: 8.9887,
    Q0: 354.3489,
    theta: 109,
    thetaD: 108
  },

  Ir: {
    nome: "Irídio",
    simbolo: "Ir",
    estrutura: "fcc",
    k: 7.4105,
    Q0: 1308.14,
    theta: 287,
    thetaD: 420
  },

  Li: {
    nome: "Lítio",
    simbolo: "Li",
    estrutura: "bcc",
    k: 2.674,
    Q0: 181.0102,
    theta: 434,
    thetaD: 344
  },

  Mg: {
    nome: "Magnésio",
    simbolo: "Mg",
    estrutura: "hcp",
    k: 4.0105,
    Q0: 356.7582,
    theta: 307,
    thetaD: 400
  },

  Mn: {
    nome: "Manganês",
    simbolo: "Mn",
    estrutura: "bcc",
    k: 6.4731,
    Q0: 389.7182,
    theta: 490,
    thetaD: 410
  },

  Mo: {
    nome: "Molibdênio",
    simbolo: "Mo",
    estrutura: "bcc",
    k: 14.0361,
    Q0: 1958.922,
    theta: 219,
    thetaD: 450
  },

  Na: {
    nome: "Sódio",
    simbolo: "Na",
    estrutura: "bcc",
    k: 0.9866,
    Q0: 121.1927,
    theta: 300,
    thetaD: 158
  },

  Nb: {
    nome: "Nióbio",
    simbolo: "Nb",
    estrutura: "bcc",
    k: 3.1596,
    Q0: 1115.179,
    theta: 307,
    thetaD: 275
  },

  Ni: {
    nome: "Níquel",
    simbolo: "Ni",
    estrutura: "fcc",
    k: 2.7276,
    Q0: 578.1584,
    theta: 440,
    thetaD: 450
  },

  Os: {
    nome: "Ósmio",
    simbolo: "Os",
    estrutura: "hcp",
    k: 5.5187,
    Q0: 1610.491,
    theta: 250,
    thetaD: 500
  },

  Pb: {
    nome: "Chumbo",
    simbolo: "Pb",
    estrutura: "fcc",
    k: 3.6917,
    Q0: 332.0544,
    theta: 89,
    thetaD: 105
  },

  Pd: {
    nome: "Paládio",
    simbolo: "Pd",
    estrutura: "fcc",
    k: 4.2628,
    Q0: 720.8621,
    theta: 283,
    thetaD: 274
  },

  Pt: {
    nome: "Platina",
    simbolo: "Pt",
    estrutura: "fcc",
    k: 5.1792,
    Q0: 976.3254,
    theta: 226,
    thetaD: 240
  },

  Re: {
    nome: "Rênio",
    simbolo: "Re",
    estrutura: "hcp",
    k: 3.797,
    Q0: 1306.291,
    theta: 315,
    thetaD: 430
  },

  Rh: {
    nome: "Ródio",
    simbolo: "Rh",
    estrutura: "fcc",
    k: 7.3312,
    Q0: 981.3101,
    theta: 224,
    thetaD: 480
  },

  Ru: {
    nome: "Rutênio",
    simbolo: "Ru",
    estrutura: "hcp",
    k: 9.2628,
    Q0: 1302.515,
    theta: 234,
    thetaD: 600
  },

  Sb: {
    nome: "Antimônio",
    simbolo: "Sb",
    estrutura: "hcp",
    k: 2.1217,
    Q0: 768.8687,
    theta: 183,
    thetaD: 211
  },

  Sc: {
    nome: "Escândio",
    simbolo: "Sc",
    estrutura: "hcp",
    k: 3.6194,
    Q0: 792.7256,
    theta: 476,
    thetaD: 360
  },

  Si: {
    nome: "Silício",
    simbolo: "Si",
    estrutura: "fcc",
    k: 2.2038,
    Q0: 1887.789,
    theta: 1101,
    thetaD: 645
  },

  Sn: {
    nome: "Estanho",
    simbolo: "Sn",
    estrutura: "hcp",
    k: 8.5492,
    Q0: 469.0371,
    theta: 164,
    thetaD: 200
  },

  Ta: {
    nome: "Tântalo",
    simbolo: "Ta",
    estrutura: "bcc",
    k: 11.0824,
    Q0: 1653.603,
    theta: 158,
    thetaD: 240
  },

  Th: {
    nome: "Tório",
    simbolo: "Th",
    estrutura: "fcc",
    k: 4.6252,
    Q0: 782.6518,
    theta: 163,
    thetaD: 163
  },

  Ti_hcp: {
    nome: "Titânio",
    simbolo: "Ti",
    estrutura: "hcp",
    k: 4.7097,
    Q0: 898.7748,
    theta: 422,
    thetaD: 420
  },

  Ti_bcc: {
    nome: "Titânio",
    simbolo: "Ti",
    estrutura: "bcc",
    k: 6.8934,
    Q0: 1074.047,
    theta: 300,
    thetaD: 300
  },

  V: {
    nome: "Vanádio",
    simbolo: "V",
    estrutura: "bcc",
    k: 5.9149,
    Q0: 946.3259,
    theta: 395,
    thetaD: 380
  },

  W: {
    nome: "Tungstênio",
    simbolo: "W",
    estrutura: "bcc",
    k: 9.2307,
    Q0: 2027.944,
    theta: 291,
    thetaD: 400
  },

  Y: {
    nome: "Ítrio",
    simbolo: "Y",
    estrutura: "hcp",
    k: 3.9089,
    Q0: 816.8919,
    theta: 275,
    thetaD: 280
  },

  Yb: {
    nome: "Itérbio",
    simbolo: "Yb",
    estrutura: "bcc",
    k: 3.2559,
    Q0: 368.0229,
    theta: 195,
    thetaD: 120
  },

  Zn: {
    nome: "Zinco",
    simbolo: "Zn",
    estrutura: "hcp",
    k: 1.7497,
    Q0: 291.5521,
    theta: 181,
    thetaD: 327
  },

  Zr_hcp: {
    nome: "Zircônio",
    simbolo: "Zr",
    estrutura: "hcp",
    k: 10.4648,
    Q0: 1460.968,
    theta: 286,
    thetaD: 291
  },

  Zr_bcc: {
    nome: "Zircônio",
    simbolo: "Zr",
    estrutura: "bcc",
    k: 6.6146,
    Q0: 1240.919,
    theta: 212,
    thetaD: 212
  }
};
