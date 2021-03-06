let stock = [
    {
        name: "BIO quinoa bílá",
        category: "Zrna",
        price: 139,
        unit: 'kg',
    },
    {
        name: "BIO quinoa červená",
        category: "Zrna",
        price: 149,
        unit: 'kg',
    },
    {
        name: "Pohanka",
        category: "Zrna",
        price: 74,
        unit: 'kg',
    },
    {
        name: "Pohanka lámanka",
        category: "Zrna",
        price: 75,
        unit: 'kg',
    },
    {
        name: "Jáhly",
        category: "Zrna",
        price: 45,
        unit: 'kg',
    },
    {
        name: "BIO kukuřičná polenta instantní",
        category: "Zrna",
        price: 52,
        unit: 'kg',
    },
    {
        name: "BIO ovesné vločky",
        category: "Vločky",
        price: 58,
        unit: 'kg',
    },
    {
        name: "BIO ovesné vločky jemné",
        category: "Vločky",
        price: 59,
        unit: 'kg',
    },
    {
        name: "Žitné celozrnné bezvaječné těstoviny",
        category: "Těstoviny",
        price: 55,
        unit: 'kg',
    },
    {
        name: "Pšeničné celozrnné bezvaječné těstoviny",
        category: "Těstoviny",
        price: 55,
        unit: 'kg',
    },
    {
        name: "Rýžové těstoviny",
        category: "Těstoviny",
        price: 103,
        unit: 'kg',
    },
    {
        name: "Kokos strouhaný",
        category: "Sušené plody",
        price: 129,
        unit: 'kg',
    },
    {
        name: "Kokos chips",
        category: "Sušené plody",
        price: 139,
        unit: 'kg',
    },
    {
        name: "Kešu celé natural",
        category: "Sušené plody",
        price: 549,
        unit: 'kg',
    },
    {
        name: "Mandle loupané",
        category: "Sušené plody",
        price: 329,
        unit: 'kg',
    },
    {
        name: "Zeleninové chipsy",
        category: "Sušené plody",
        price: 590,
        unit: 'kg',
    },
    {
        name: "Arašídy loupané",
        category: "Sušené plody",
        price: 159,
        unit: 'kg',
    },
    {
        name: "BIO datle bez pecek",
        category: "Sušené ovoce",
        price: 209,
        unit: 'kg',
    },
    {
        name: "BIO sušené mango",
        category: "Sušené ovoce",
        price: 829,
        unit: 'kg',
    },
    {
        name: "Fíky Lerida",
        category: "Sušené ovoce",
        price: 279,
        unit: 'kg',
    },
    {
        name: "Goji",
        category: "Sušené ovoce",
        price: 279,
        unit: 'kg',
    },
    {
        name: "BIO sušený ananas",
        category: "Sušené ovoce",
        price: 839,
        unit: 'kg',
    },
    {
        name: "Rozinky sultánky",
        category: "Sušené ovoce",
        price: 89,
        unit: 'kg',
    },
    {
        name: "Chia",
        category: "Semínka",
        price: 139,
        unit: 'kg',
    },
    {
        name: "Semínková směs",
        category: "Semínka",
        price: 129,
        unit: 'kg',
    },
    {
        name: "Slunečnice loupaná",
        category: "Semínka",
        price: 69,
        unit: 'kg',
    },
    {
        name: "BIO želé medvídci VEGAN",
        category: "Mňamky",
        price: 490,
        unit: 'kg',
    },
    {
        name: "Bio čoko-kokosky s fair-trade čokoládou",
        category: "Mňamky",
        price: 430,
        unit: 'kg',
    },
    {
        name: "Špaldové bio krekry s dýňovým semínkem a česnekem",
        category: "Mňamky",
        price: 390,
        unit: 'kg',
    },
    {
        name: "Datlové bio sušenky s citronovým olejem",
        category: "Mňamky",
        price: 420,
        unit: 'kg',
    },
    {
        name: "Bio kakaová špaldová zvířátka",
        category: "Mňamky",
        price: 430,
        unit: 'kg',
    },
    {
        name: "Himalájská bílá sůl jemná",
        category: "Dochucovadla",
        price: 45,
        unit: 'kg',
    },
    {
        name: "Cukr třtinový tmavý",
        category: "Dochucovadla",
        price: 69,
        unit: 'kg',
    },
    {
        name: "Himalájská bílá sůl hrubá",
        category: "Dochucovadla",
        price: 45,
        unit: 'kg',
    },
    {
        name: "BIO rýže dlouhozrnná natural",
        category: "Rýže",
        price: 79,
        unit: 'kg',
    },
    {
        name: "BIO rýže basmati",
        category: "Rýže",
        price: 105,
        unit: 'kg',
    },
    {
        name: "Bulgur pšeničný",
        category: "Obiloviny",
        price: 59,
        unit: 'kg',
    },
    {
        name: "Kuskus",
        category: "Obiloviny",
        price: 65,
        unit: 'kg',
    },
    {
        name: "Ibišek květ",
        category: "Čaje",
        price: 420,
        unit: 'kg',
    },
    {
        name: "Kontryhel nať",
        category: "Čaje",
        price: 660,
        unit: 'kg',
    },
    {
        name: "Kozlík kořen",
        category: "Čaje",
        price: 680,
        unit: 'kg',
    },
    {
        name: "Ostropestřec mletý",
        category: "Čaje",
        price: 240,
        unit: 'kg',
    },
    {
        name: "Roobios kg 800,6 Zrna BIO quinoa bílá",
        category: "Čaje",
        price: 139,
        unit: 'kg',
    },
    {
        name: "BIO quinoa červená",
        category: "Zrna",
        price: 149,
        unit: 'kg',
    },
    {
        name: "Pohanka",
        category: "Zrna",
        price: 74,
        unit: 'kg',
    },
    {
        name: "Pohanka lámanka",
        category: "Zrna",
        price: 75,
        unit: 'kg',
    },
    {
        name: "Jáhly",
        category: "Zrna",
        price: 45,
        unit: 'kg',
    },
    {
        name: "BIO kukuřičná polenta instantní",
        category: "Zrna",
        price: 52,
        unit: 'kg',
    },
    {
        name: "BIO ovesné vločky",
        category: "Vločky",
        price: 58,
        unit: 'kg',
    },
    {
        name: "BIO ovesné vločky jemné",
        category: "Vločky",
        price: 59,
        unit: 'kg',
    },
    {
        name: "Žitné celozrnné bezvaječné těstoviny",
        category: "Těstoviny",
        price: 55,
        unit: 'kg',
    },
    {
        name: "Pšeničné celozrnné bezvaječné těstoviny",
        category: "Těstoviny",
        price: 55,
        unit: 'kg',
    },
    {
        name: "Rýžové těstoviny",
        category: "Těstoviny",
        price: 103,
        unit: 'kg',
    },
    {
        name: "Kokos strouhaný",
        category: "Sušené plody",
        price: 129,
        unit: 'kg',
    },
    {
        name: "Kokos chips",
        category: "Sušené plody",
        price: 139,
        unit: 'kg',
    },
    {
        name: "Kešu celé natural",
        category: "Sušené plody",
        price: 549,
        unit: 'kg',
    },
    {
        name: "Mandle loupané",
        category: "Sušené plody",
        price: 329,
        unit: 'kg',
    },
    {
        name: "Zeleninové chipsy",
        category: "Sušené plody",
        price: 590,
        unit: 'kg',
    },
    {
        name: "Arašídy loupané",
        category: "Sušené plody",
        price: 159,
        unit: 'kg',
    },
    {
        name: "BIO datle bez pecek",
        category: "Sušené ovoce",
        price: 209,
        unit: 'kg',
    },
    {
        name: "BIO sušené mango",
        category: "Sušené ovoce",
        price: 829,
        unit: 'kg',
    },
    {
        name: "Fíky Lerida",
        category: "Sušené ovoce",
        price: 279,
        unit: 'kg',
    },
    {
        name: "Goji",
        category: "Sušené ovoce",
        price: 279,
        unit: 'kg',
    },
    {
        name: "BIO sušený ananas",
        category: "Sušené ovoce",
        price: 839,
        unit: 'kg',
    },
    {
        name: "Rozinky sultánky",
        category: "Sušené ovoce",
        price: 89,
        unit: 'kg',
    },
    {
        name: "Chia",
        category: "Semínka",
        price: 139,
        unit: 'kg',
    },
    {
        name: "Semínková směs",
        category: "Semínka",
        price: 129,
        unit: 'kg',
    },
    {
        name: "Slunečnice loupaná",
        category: "Semínka",
        price: 69,
        unit: 'kg',
    },
    {
        name: "BIO želé medvídci VEGAN",
        category: "Mňamky",
        price: 490,
        unit: 'kg',
    },
    {
        name: "Bio čoko-kokosky s fair-trade čokoládou",
        category: "Mňamky",
        price: 430,
        unit: 'kg',
    },
    {
        name: "Špaldové bio krekry s dýňovým semínkem a česnekem",
        category: "Mňamky",
        price: 390,
        unit: 'kg',
    },
    {
        name: "Datlové bio sušenky s citronovým olejem",
        category: "Mňamky",
        price: 420,
        unit: 'kg',
    },
    {
        name: "Bio kakaová špaldová zvířátka",
        category: "Mňamky",
        price: 430,
        unit: 'kg',
    },
    {
        name: "Himalájská bílá sůl jemná",
        category: "Dochucovadla",
        price: 45,
        unit: 'kg',
    },
    {
        name: "Cukr třtinový tmavý",
        category: "Dochucovadla",
        price: 69,
        unit: 'kg',
    },
    {
        name: "Himalájská bílá sůl hrubá",
        category: "Dochucovadla",
        price: 45,
        unit: 'kg',
    },
    {
        name: "BIO rýže dlouhozrnná natural",
        category: "Rýže",
        price: 79,
        unit: 'kg',
    },
    {
        name: "BIO rýže basmati",
        category: "Rýže",
        price: 105,
        unit: 'kg',
    },
    {
        name: "Bulgur pšeničný",
        category: "Obiloviny",
        price: 59,
        unit: 'kg',
    },
    {
        name: "Kuskus",
        category: "Obiloviny",
        price: 65,
        unit: 'kg',
    },
    {
        name: "Ibišek květ",
        category: "Čaje",
        price: 420,
        unit: 'kg',
    },
    {
        name: "Kontryhel nať",
        category: "Čaje",
        price: 660,
        unit: 'kg',
    },
    {
        name: "Kozlík kořen",
        category: "Čaje",
        price: 680,
        unit: 'kg',
    },
    {
        name: "Ostropestřec mletý",
        category: "Čaje",
        price: 240,
        unit: 'kg',
    },
    {
        name: "Roobios",
        category: "Čaje",
        price: 800,
        unit: 'kg',
    },
];
