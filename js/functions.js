/*var app5 = new Vue({
el: '#app-5',
data: {
  message: 'Trump'
},
methods: {
  reverseMessage: function () {
    this.message = this.message.split('').reverse().join('')
  }
}
})
*/

"use strict";

window.onload = function() {

    var quiz = {
        title: 'Test de personnalité',

        questions: [{
                text: "Hello",
            },
            {
                text: "Quelle relation avez-vous avec l’argent ?",
                responses: [{
                        text: 'Vous détestez les riches : au bûcher !',
                        value: 'Hollande'
                    },
                    {
                        text: 'Vous adoreriez avoir un sac Louis Vuitton et une Rolex',
                        value: 'Trump' && 'Macron'
                    }
                ]
            },
            {
                text: "Plutôt",
                responses: [{
                        text: 'Blond(e) ?',
                        value: 'Merkel'
                    },
                    {
                        text: 'Brun(e) ?',
                        value: 'Macron'
                    },
                    {
                        text: 'Peroxydé ?',
                        value: 'Trump'
                    }
                ]
            },
            {
                text: "Quelle école a le plus de style ?",
                responses: [{
                        text: 'École de commerce',
                        value: 'Macron' && 'Trump'
                    },
                    {
                        text: 'École de droit',
                        value: 'Hollande'
                    },
                    {
                        text: 'Fac de sciences',
                        value: 'Merkel'
                    }
                ]
            },
            {
                text: "Quelle phrase vous correspondrait le plus ?",
                responses: [{
                        text: '"La population qui vieillit, vieillit de plus en plus vieux"',
                        value: 'Sarkozy'
                    },
                    {
                        text: '"L\'espionnage n’est jamais acceptable entre amis"',
                        value: 'Merkel'
                    },
                    {
                        text: '"We are proud of you because you can be do what we want to do"',
                        value: 'Hollande'
                    },
                    {
                        text: '"Je ne céderais rien aux fainéants"',
                        value: 'Macron'
                    }
                ]
            },
            {
                text: "Quel loisir préférez-vous ?",
                responses: [{
                        text: 'Tennis',
                        value: 'Macron'
                    },
                    {
                        text: 'Vélo',
                        value: 'Sarkozy'
                    },
                    {
                        text: 'Scooter',
                        value: 'Hollande'
                    },
                    {
                        text: 'Golf',
                        value: 'Trump'
                    }
                ]
            },
            {
                text: "Quel écart d’âge seriez-vous prêt à accepter dans votre couple ?",
                responses: [{
                      text: 'Jusqu\'à 5 ans',
                      value: 'Merkel'
                  },
                  {
                      text: 'Entre 10 et 25 ans',
                      value: 'Sarkozy' && 'Hollande'
                  },
                  {
                      text: 'Plus de 25 ans',
                      value: 'Trump' && 'Macron'
                  }
                ]
            },
            {
                text: "Pour les photos vous êtes plutôt",
                responses: [{
                      text: 'Souriant(e)',
                      value: 'Macron' && 'Sarkozy'
                  },
                  {
                      text: 'Effrayant(e)',
                      value: 'Trump'
                  },
                  {
                      text: 'Naturel(le)',
                      value: 'Merkel' && 'Hollande'
                  }
                ]
            },
            {
                text: "Dans quel pays souhaitez-vous vivre ?",
                responses: [
                  {
                      text: 'En France',
                      value: 'Macron' && 'Hollande' && 'Sarkozy'
                  },
                  {
                      text: 'Aux Etats-Unis',
                      value: 'Trump'
                  },
                  {
                      text: 'En Allemagne',
                      value: 'Merkel'
                  }
                ]
            },
        ]
    };
/*
    var content = new Vue({
        el: '#content',
        data: {
        }
    });
*/
    var app = new Vue({
        el: '#app',
        data: {
            quiz: quiz,
            questionIndex: 0,
            userResponses: Array()
        },
        methods: {
            // Go to next question
            next: function() {
                this.questionIndex++;
                console.log(this.userResponses);
            },
            // Go to previous question
            prev: function() {
                this.questionIndex--;
            },
            score: function() {
                //find the highest occurence in responses
                var modeMap = {};
                var maxEl = this.userResponses[0],
                    maxCount = 1;
                for (var i = 0; i < this.userResponses.length; i++) {
                      var el = this.userResponses[i];
                    if (modeMap[el] == null)
                        modeMap[el] = 1;
                    else
                        modeMap[el]++;
                    if (modeMap[el] > maxCount) {
                        maxEl = el;
                        maxCount = modeMap[el];
                    }
                }
                return maxEl;
            }
        }
    });
}
