window.onload = function() {
    var app = new Vue({
        el: '#app',
        data: {
            questions: questions,
            questionIndex: 1,
            current_question: questions[1],
            question: questions[1],
            responses: questions[1].responses,

        },
        methods: {
            // Go to next question
            next: function() {
                var current_question = questions[this.questionIndex];

                var user_response = document.querySelector('.response_radio:checked').value;

                console.log(user_response);

                var impactPlus = current_question.responses[user_response].impactPlus;
                var impactMoins = current_question.responses[user_response].impactMoins;

                console.log("impactPlus:" + impactPlus + "; impactMoins:" + impactMoins);

                for (var i = 0; i < impactPlus.length; i++) {
                    switch (impactPlus[i]) {
                        case "macron":
                            macron = macron + 1;
                            console.log("macron:" + macron);
                            break;
                        case "trump":
                            trump = trump + 1;
                            console.log("trump:" + trump);
                            break;
                        case "holland":
                            holland = holland + 1;
                            console.log("holland:" + holland);
                            break;
                        default:

                    }
                }

                for (var k = 0; k < impactMoins.length; k++) {
                    switch (impactMoins[k]) {
                        case "macron":
                            macron = macron - 1;
                            console.log("macron:" + macron);
                            break;
                        case "trump":
                            trump = trump - 1;
                            console.log("trump:" + trump);
                            break;
                        case "holland":
                            holland = holland - 1;
                            console.log("holland:" + holland);
                            break;
                        default:

                    }
                }

                this.questionIndex++;
                next_question = questions[this.questionIndex];
                next_responses = questions[this.questionIndex].responses;
                this.question = next_question;
                this.responses = next_responses;

            },

        }
    });
};
