var questions = [
    {
        id: 0,
        text: "Quelle relation avez-vous avec l’argent ?",
        responses: [
            {
                id: 0,
                text: 'Vous détestez les riches : au bûcher !',
                impactPlus: ['holland'],
                impactMoins: ['macron', 'trump']
            },
            {
                id: 1,
                text: 'Vous adoreriez avoir un sac Louis Vuitton et une Rolex',
                impactPlus: ['trump', 'macron'],
                impactMoins: []
            }
        ]
    },
    {
        id: 1,
        text: "Plutôt",
        responses: [
            {
                id: 0,
                text: 'Blond(e) ?',
                impactPlus: ['merkel'],
                impactMoins: ['macron', 'holland', 'trump', 'sarkozy']
            },
            {
                id: 1,
                text: 'Brun(e) ?',
                impactPlus: ['macron', 'sarkozy', 'holland'],
                impactMoins: ['merkel', 'trump']
            },
            {
                id: 2,
                text: 'Peroxydé ?',
                impactPlus: ['trump'],
                impactMoins: ['merkel', 'macron', 'holland', 'sarkozy']
            }
        ]
    },
    {
        id: 2,
        text: "Quelle école a le plus de style ?",
        responses: [
            {
                id: 0,
                text: 'Ecole de commerce',
                impactPlus: ['macron', 'trump'],
                impactMoins: []
            },
            {
                id: 1,
                text: 'Ecole de droit',
                impactPlus: ['holland', 'sarkozy'],
                impactMoins: []
            },
            {
                id: 2,
                text: 'fac de sciences',
                impactPlus: ['merkel'],
                impactMoins: []
            }
        ]
    },
    {
        id: 3,
        text: "Quelle phrase vous correspondrait le plus :",
        responses: [
            {
                id: 0,
                text: 'La population qui vieillit, vieillit de plus en plus vieux.',
                impactPlus: ['sarkozy'],
                impactMoins: []
            },
            {
                id: 1,
                text: 'L\'espionnage n\'est jamais acceptable entre amis',
                impactPlus: ['merkel'],
                impactMoins: ['sarkozy', 'trump']
            },
            {
                id: 2,
                text: 'Je ne céderais rien aux fainéants',
                impactPlus: ['macron'],
                impactMoins: ['trump']
            },
            {
                id: 3,
                text: 'We are proud of you because you can be do what we want to do',
                impactPlus: ['holland'],
                impactMoins: ['trump']
            }
        ]
    },
    {
        id: 4,
        text: "Dans quelle pays souhaitez-vous vivre :",
        responses: [
            {
                id: 0,
                text: 'En France',
                impactPlus: ['macron', 'sarkozy', 'holland'],
                impactMoins: ['merkel', 'trump']
            },
            {
                id: 1,
                text: 'Au USA',
                impactPlus: ['trump'],
                impactMoins: ['macron', 'sarkozy', 'holland', 'trump']
            },
            {
                id: 2,
                text: 'En Allemagne',
                impactPlus: ['merkel'],
                impactMoins: ['macron', 'sarkozy', 'holland', 'trump']
            }
        ]
    },
    {
        id: 5,
        text: "Quel écart d’âge seriez-vous prêt à accepter dans votre couple ?",
        responses: [
            {
                id: 0,
                text: 'plus de 25 ans',
                impactPlus: ['trump', 'macron'],
                impactMoins: ['merkel']
            },
            {
                id: 1,
                text: 'entre 10 ans et 25 ans',
                impactPlus: ['sarkozy', 'holland'],
                impactMoins: []
            },
            {
                id: 2,
                text: '<9 ans',
                impactPlus: ['merkel'],
                impactMoins: ['trump', 'macron']
            }
        ]
    },
    {
        id: 6,
        text: "Quel loisir, préférez-vous ?",
        responses: [
            {
                id: 0,
                text: 'Tennis',
                impactPlus: ['macron'],
                impactMoins: ['merkel', 'trump']
            },
            {
                id: 1,
                text: 'Vélo',
                impactPlus: ['sarkozy'],
                impactMoins: ['merkel', 'trump']
            },
            {
                id: 2,
                text: 'Golf',
                impactPlus: ['trump'],
                impactMoins: ['merkel', 'holland', 'macron', 'sarkozy']
            },
            {
                id: 3,
                text: 'Foot',
                impactPlus: ['holland'],
                impactMoins: ['merkel', 'trump']
            }
        ]
    },
    {
        id: 7,
        text: "Pour les photos vous êtes plutôt",
        responses: [
            {
                id: 0,
                text: 'souriant(e)',
                impactPlus: ['macron', 'sarkozy'],
                impactMoins: ['trump']
            },
            {
                id: 1,
                text: 'effrayant(e)',
                impactPlus: ['trump'],
                impactMoins: ['sarkozy', 'macron', 'merkel', 'holland']
            },
            {
                id: 3,
                text: 'naturel(e)',
                impactPlus: ['merkel', 'holland'],
                impactMoins: ['trump']
            }
        ]
    },
    {
        id: 8,
        text: "Niveau alcool vous êtes :",
        responses: [
            {
                id: 0,
                text: 'Bière',
                impactPlus: ['merkel'],
                impactMoins: ['macron', 'sarkozy', 'holland', 'trump']
            },
            {
                id: 1,
                text: 'Whisky',
                impactPlus: ['trump', 'sarkozy'],
                impactMoins: ['macron', 'merkel', 'holland']
            },
            {
                id: 3,
                text: 'Vin',
                impactPlus: ['macron', 'holland', 'sarkozy'],
                impactMoins: ['merkel', 'trump']
            }
        ]
    },
    {
        id: 9,
        text: "Vous aimeriez avoir :",
        responses: [
            {
                id: 0,
                text: 'Aucun enfant',
                impactPlus: ['merkel', 'macron'],
                impactMoins: ['sarkozy', 'holland', 'trump']
            },
            {
                id: 1,
                text: 'Famille moyenne',
                impactPlus: ['holland', 'sarkozy'],
                impactMoins: ['macron', 'merkel']
            },
            {
                id: 3,
                text: 'Grande famille',
                impactPlus: ['trump'],
                impactMoins: ['merkel', 'macron']
            }
        ]
    }
];
