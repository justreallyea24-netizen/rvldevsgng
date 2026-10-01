// script.js

const answers = {

  q1: "7",

  q2: "Cup",

  q3: "Pencil",

  q4: "Mango",

  q5: "Mobile phone",

  q6: "Tuesday",

  q7: "Blue",

  q8: "Cat",

  q9: "12",

  q10: "Car",

  q11: "Clock",

  q12: "Toothbrush"

};


document
  .getElementById("quizForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    const form = new FormData(this);

    let score = 0;


    for (
      const [question, answer]
      of Object.entries(answers)
    ) {

      if (form.get(question) === answer) {
        score++;
      }

    }


    const result =
      document.getElementById("result");


    result.hidden = false;


    result.textContent =
      `Your result: ${score} / ${Object.keys(answers).length}`;


    result.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

});