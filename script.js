function checkAnswers() {
  const answers = {
    q1: "d",
    q2: "a",
    q3: "b",
    q4: "c",
    q5: "c",
    q6: "c",
    q7: "false",
    q8: "false",
    q9: "true"
  };

  let score = 0;
  let total = Object.keys(answers).length;

  for (let q in answers) {
    let selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === answers[q]) {
      score++;
    }
  }

  document.getElementById("result").textContent = `Your score: ${score} out of ${total}`;
}