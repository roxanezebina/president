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

                var user_response = document.querySelector('.response_radio:checked').value;

                console.log("user_response" + user_response);


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
                        case "holland":
                            holland = holland + 1;
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
                        case "holland":
                            holland = holland - 1;
                            break;
                        default:

                    }
                }

                if (this.questionIndex >= questions.length - 1) {
                    console.log("macron:" + macron + " trump:" + trump + " holland:" + holland);

                    var presidents = [macron, trump, holland],
                        maxpresident = Math.max.apply(Math.max, presidents),
                        presidentsNames = ["macron", "trump", "holland"],
                        bestPresident = presidentsNames[presidents.indexOf(maxpresident)];
                        console.log(bestPresident);
                        alert("macron:" + macron + " trump:" + trump + " holland:" + holland + "\n" +
                        "Votre président chéri : " + bestPresident);
                } else {

                    this.questionIndex++;
                    next_question = questions[this.questionIndex];
                    next_responses = questions[this.questionIndex].responses;
                    this.question = next_question;
                    this.responses = next_responses;
                }

            },

        }
    });
};
