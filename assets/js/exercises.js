
function populate() {
  //page_content = document.getElementsByClassName("page__content")[0];
  exercises_header = document.getElementById("exercises");

  exercise_image = document.createElement("IMG");
  exercise_image.setAttribute("id", "exercise_image")
  exercise_image.setAttribute("src", "/cs2mulch/assets/images/gsort10.png");
  exercise_image.setAttribute("alt", "test image");
  image_linebreak = document.createElement("br");
  exercise_image.appendChild(image_linebreak);
  exercises_header.after(exercise_image);


  question_bumper = document.createElement("DIV");
  question_bumper.setAttribute("class", "bumper");
  question_bumper.setAttribute("id","question_bumper");
  //exercise_image = document.getElementById("exercise_image");
  exercise_question = document.createElement("TEXT");
  exercise_question.setAttribute("id","exercise_question");
  question_bumper.appendChild(exercise_question);
  exercise_image.after(question_bumper);

  exercise_answer = document.createElement("TEXT");
  exercise_answer.setAttribute("class", "answer");
  exercise_answer.setAttribute("id", "exercise_answer");
  answer_linebreak = document.createElement("br");
  //question_bumper = document.getElementById("question_bumper");
  question_bumper.after(exercise_answer);

  reveal_button = document.createElement("BUTTON");
  reveal_button.innerHTML = "Reveal Answer";
  reveal_button.setAttribute("onclick", "revealAnswer()");
  reveal_button.setAttribute("id", "reveal_button");
  reveal_linebreak = document.createElement("br");
  //exercise_answer = document.getElementById("exercise_answer");
  exercise_answer.after(reveal_linebreak);
  reveal_linebreak.after(reveal_button);

  new_exercise_button = document.createElement("BUTTON");
  new_exercise_button.innerHTML = "Next Exercise";
  new_exercise_button.setAttribute("onclick", "newExercise()");
  new_exercise_button.setAttribute("id", "new_exercise_button");
  reveal_button = document.getElementById("reveal_button");
  reveal_button.after(new_exercise_button);

}

function newExercise() {
  fetch("/cs2mulch/assets/exercises/testexercise.txt")
  .then((res) => res.text())
  .then((text) => {
    var textArray = text.split('&');
    var avail_exercises = parseInt(textArray[1]);
    let x = Math.floor((Math.random() * avail_exercises)) + 2;
    question = textArray[x];
    questionArray = question.split('{}');
    document.getElementById("exercise_image").src = questionArray[1];
    document.getElementById("exercise_question").innerHTML = questionArray[2];
    document.getElementById("exercise_answer").innerHTML = questionArray[3];
    document.getElementById("exercise_answer").className = "answer";
  })
  .catch((e) => console.error(e));
}

window.onload = newExercise();
window.onload = populate();
