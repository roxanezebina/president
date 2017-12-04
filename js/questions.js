var questions = [
    {
        id: 0,
        text: "Hello",
        responses: []
    },
    {
        id: 1,
        text: "Quelle relation avez-vous avec l’argent ?",
        responses: [
            {
                id: 0,
                text: 'Vous détestez les riches : au bûcher !',
                impactPlus: ['holland'],
                impactMoins: ['macron']
            },
            {
                id: 1,
                text: 'Vous adoreriez avoir un sac Louis Vuitton et une Rolex',
                impactPlus: ['trump', 'macron']
            }
        ]
    },
    {
        id: 2,
        text: "Plutôt",
        responses: [
            {
                text: 'Blond(e) ?',
                impactPlus: ['merkel']
            },
            {
                text: 'Brun(e) ?',
                impactPlus: ['macron']
            },
            {
                text: 'Peroxydé ?',
                impactPlus: ['trump']
            }
        ]
    },
];
