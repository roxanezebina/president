window.onload = function() {
    var app = new Vue({
        el: '#app',
        data: {
            questions: questions,
            questionIndex: 0,
            current_question: questions[0],
            question: questions[0],
            responses: questions[0].responses,

        },
        methods: {
            // Go to next question
            next: function() {

                console.log("id:" + this.questionIndex);

                var current_question = questions[this.questionIndex];
                console.log(current_question);
                var user_response = document.querySelector('.response_radio:checked').value;

                console.log("reponse:" + user_response);


                impactPlus = current_question.responses[user_response].impactPlus;
                impactMoins = current_question.responses[user_response].impactMoins;

                console.log("impactPlus:" + impactPlus + "; impactMoins:" + impactMoins);

                for (var i = 0; i < impactPlus.length; i++) {
                    switch (impactPlus[i]) {
                        case "macron":
                            macron = macron + 1;
                            break;
                        case "trump":
                            trump = trump + 1;
                            break;
                        case "hollande":
                            hollande = hollande + 1;
                            break;
                        default:

                    }
                }

                for (var k = 0; k < impactMoins.length; k++) {
                    switch (impactMoins[k]) {
                        case "macron":
                            macron = macron - 1;
                            break;
                        case "trump":
                            trump = trump - 1;
                            break;
                        case "hollande":
                            hollande = hollande - 1;
                            break;
                        default:

                    }
                }

                if (this.questionIndex >= questions.length - 1) {
                    console.log("macron:" + macron + " trump:" + trump + " hollande:" + hollande + " merkel:" + merkel + " sarkozy:" + sarkozy);

                    var presidents = [macron, trump, hollande, merkel, sarkozy],
                        maxpresident = Math.max.apply(Math.max, presidents),
                        presidentsNames = ["macron", "trump", "hollande", "merkel", "sarkozy"],
                        bestPresident = presidentsNames[presidents.indexOf(maxpresident)];
                        console.log(bestPresident);
                        alert("macron:" + macron + " trump:" + trump + " hollande:" + hollande + " merkel:" + merkel + " sarkozy:" + sarkozy + "\n" +
                        "Votre président chéri : " + bestPresident);
                } else {
                    this.questionIndex++;
                    next_question = questions[this.questionIndex];
                    next_responses = questions[this.questionIndex].responses;
                    console.log(next_question.text);
                    this.question = next_question;
                    this.responses = next_responses;
                }

            },


        }
    });
};
