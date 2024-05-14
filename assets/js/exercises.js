var current_q = 0;
var submit_bool = false;
var num_score = 0;
var avail_questions=0;
var can_next_eval = true;
var page = "";
var eval_file_exist = false;
var exer_file_exist = false;

function populate() { // Appending the necessary elements for the exercises, evaluations, and printables portion to the page
  page = window.location.href.split('/')
  var evaluationurl = "/cs2mulch/assets/evaluations/" + page[5] + ".txt";
  var exerciseurl = "/cs2mulch/assets/exercises/" + page[5] + ".txt";
  if(evaluationurl){
      var req = new XMLHttpRequest();
      req.open('GET', evaluationurl, false);
      req.send();
      eval_file_exist = req.status==200;
  }
  if(exerciseurl){
      var req = new XMLHttpRequest();
      req.open('GET', exerciseurl, false);
      req.send();
      exer_file_exist = req.status==200;
  }
  fetch("/cs2mulch/assets/evaluations/" + page[5] + ".txt")
  .then((res) => res.text())
  .then((text) => {
    if (exer_file_exist) {

      exercises_header = document.getElementById("exercises");

      exercise_image = document.createElement("IMG");
      exercise_image.setAttribute("id", "exercise_image")
      exercise_image.setAttribute("src", "/cs2mulch/assets/images/gsort10.png");
      exercise_image.setAttribute("alt", "exercise image");
      exercise_image.setAttribute("style", "max-height: 400px");
      exercises_header.after(exercise_image);


      question_bumper = document.createElement("DIV");
      question_bumper.setAttribute("class", "bumper");
      question_bumper.setAttribute("id","question_bumper");
      exercise_question = document.createElement("TEXT");
      exercise_question.setAttribute("style", "font-family:Fredoka One");
      exercise_question.setAttribute("id","exercise_question");
      question_bumper.appendChild(exercise_question);
      exercise_image.after(question_bumper);

      exercise_answer_bumper = document.createElement("DIV");
      exercise_answer_bumper.setAttribute("class", "bumper");
      exercise_answer_bumper.setAttribute("id","exercise_answer_bumper");
      exercise_answer = document.createElement("TEXT");
      exercise_answer.setAttribute("class", "answer");
      exercise_answer.setAttribute("id", "exercise_answer");
      exercise_answer_bumper.appendChild(exercise_answer);
      question_bumper.after(exercise_answer_bumper);

      reveal_button = document.createElement("BUTTON");
      reveal_button.innerHTML = "Reveal Answer";
      reveal_button.setAttribute("onclick", "revealAnswer()");
      reveal_button.setAttribute("id", "reveal_button");
      reveal_button.setAttribute("style", "border-radius:12px; font-family:Fredoka One; background-color: #277214; color: white; border-color: black");
      exercise_answer_bumper.after(reveal_button);

      new_exercise_button = document.createElement("BUTTON");
      new_exercise_button.innerHTML = "Next Exercise";
      new_exercise_button.setAttribute("onclick", "newExercise()");
      new_exercise_button.setAttribute("id", "new_exercise_button");
      new_exercise_button.setAttribute("style", "border-radius:12px; font-family:Fredoka One; background-color: #277214; color: white; border-color: black; float: right");
      reveal_button.after(new_exercise_button);

      newExercise();
    }
    if (eval_file_exist) {
      var textArray = text.split('&');
      avail_questions = parseInt(textArray[1]);

      evaluation_header = document.getElementById("evaluation");

      evaluation_title_bumper = document.createElement("DIV");
      evaluation_title_bumper.setAttribute("class", "bumper");
      evaluation_title_bumper.setAttribute("id","evaluation_title_bumper");
      evaluation_num = document.createElement("TEXT");
      evaluation_num.setAttribute("id", "evaluation_num")
      evaluation_num.setAttribute("value","1");
      evaluation_num.setAttribute("style","font-family:Fredoka One");
      evaluation_num.innerHTML = "Evaluation #";
      evaluation_title_bumper.appendChild(evaluation_num);
      score = document.createElement("TEXT");
      score.setAttribute("id","score");
      score.setAttribute("value","0");
      score.setAttribute("style","float: right; font-family:Fredoka One");
      score.innerHTML = "Score: 0/" + avail_questions;
      evaluation_title_bumper.appendChild(score);
      evaluation_header.after(evaluation_title_bumper);

      evaluation_image_bumper = document.createElement("DIV");
      evaluation_image_bumper.setAttribute("class", "bumper");
      evaluation_image = document.createElement("IMG");
      evaluation_image.setAttribute("id", "evaluation_image");
      evaluation_image.setAttribute("src", "/cs2mulch/assets/images/gsort10.png");
      evaluation_image.setAttribute("alt", "evaluation image");
      evaluation_image.setAttribute("style", "max-height: 400px");
      evaluation_image_bumper.appendChild(evaluation_image);
      evaluation_title_bumper.after(evaluation_image_bumper);

      evaluation_question_bumper = document.createElement("DIV");
      evaluation_question_bumper.setAttribute("class", "bumper");
      evaluation_question_bumper.setAttribute("id","evaluation_question_bumper");
      evaluation_question = document.createElement("TEXT");
      evaluation_question.setAttribute("id","evaluation_question");
      evaluation_question.setAttribute("style","font-family:Fredoka One");
      evaluation_question_bumper.appendChild(evaluation_question);
      evaluation_image_bumper.after(evaluation_question_bumper);

      checkbox_form = document.createElement("FORM");
      for (i = 1; i < 5; i++){
        temp_bumper = document.createElement("DIV");
        temp_bumper.setAttribute("class", "bumper");
        temp_choice = document.createElement("INPUT")
        temp_choice.setAttribute("type", "checkbox");
        temp_choice.setAttribute("style", "width:20px;height:20px; accent-color: #277214");
        temp_choice.setAttribute("onclick","onlyOne(this.id)");
        temp_choice.setAttribute("id", "choice_" + i);
        temp_choice.setAttribute("value", "Choice " + i);
        temp_choice.setAttribute("class", "choice");
        label_temp_choice = document.createElement("LABEL");
        label_temp_choice.setAttribute("for", "choice_" + i);
        label_temp_choice.setAttribute("class", "choice_label");
        label_temp_choice.innerHTML = "Choice " + i;
        temp_bumper.appendChild(temp_choice);
        temp_bumper.appendChild(label_temp_choice);
        checkbox_form.appendChild(temp_bumper);
      }

      evaluation_question_bumper.after(checkbox_form);

      eval_buttons_bumper = document.createElement("DIV");
      eval_buttons_bumper.setAttribute("class", "bumper");
      submit_button = document.createElement("BUTTON");
      submit_button.setAttribute("onclick","Submit()");
      submit_button.setAttribute("style", "border-radius:12px; font-family:Fredoka One; background-color: #277214; color: white; border-color: black");
      submit_button.innerHTML = "Submit";
      eval_buttons_bumper.appendChild(submit_button);
      new_eval_button = document.createElement("BUTTON");
      new_eval_button.innerHTML = "Next Evaluation";
      new_eval_button.setAttribute("onclick", "newEvaluation()");
      new_eval_button.setAttribute("id", "new_evaluation_button");
      new_eval_button.setAttribute("style", "border-radius:12px; font-family:Fredoka One; background-color: #277214; color: white; border-color: black; float: right");
      eval_buttons_bumper.appendChild(new_eval_button);
      checkbox_form.after(eval_buttons_bumper);

      notif_bumper = document.createElement("DIV");
      notif_bumper.setAttribute("class", "bumper");
      evaluation_notif = document.createElement("TEXT");
      evaluation_notif.setAttribute("id","notification");
      notif_bumper.appendChild(evaluation_notif);
      eval_buttons_bumper.after(notif_bumper);

      print_bumper = document.createElement("DIV");
      print_bumper.setAttribute("class", "bumper");
      print_label = document.createElement("LABEL");
      print_label.setAttribute("for","numbers");
      print_label.innerHTML = "Print a worksheet with how many questions?";
      print_bumper.appendChild(print_label);
      print_dropdown = document.createElement("SELECT");
      print_dropdown.setAttribute("name", "numbers");
      print_dropdown.setAttribute("id","numbers");
      for (i = 1; i < avail_questions + 1; i++) {
        temp_option = document.createElement("OPTION");
        temp_option.innerHTML = "" + i;
        temp_option.setAttribute("value", "" + i);
        print_dropdown.appendChild(temp_option);
      }
      print_bumper.appendChild(print_dropdown);
      print_button = document.createElement("BUTTON");
      print_button.setAttribute("onclick","print_questions()");
      print_button.setAttribute("style", "border-radius:12px; font-family:Fredoka One; background-color: #277214; color: white; border-color: black; float: right");
      print_button.innerHTML = "Print";
      print_bumper.appendChild(print_button);
      notif_bumper.after(print_bumper);

      newEvaluation();
    }
  })
  .catch((e) => console.error(e));
}

function onlyOne(id) { //unchecks all other checkbox inputs when user checks one
  var choices = document.getElementsByClassName("choice");
  for (var i = 0, length = choices.length; i < length; i++) {
    if (choices[i].checked) {
      if (choices[i].id != id)
       choices[i].checked = false;
    }
  }
}

function newExercise() {  //pulls a new exercise from the corresponding page's exercise file and updates the corresponding elements
  fetch("/cs2mulch/assets/exercises/" + page[5] + ".txt")
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

function revealAnswer() {
  document.getElementById("exercise_answer").className = "";
}

function newEvaluation() { //pulls a new evaluation from the corresponding page's evaluation file and updates the corresponding elements
  submit_bool = false;
  var correct= ""
  if ((current_q<avail_questions || current_q == 0) && (can_next_eval == true)){
    fetch("/cs2mulch/assets/evaluations/" + page[5] + ".txt")
    .then((res) => res.text())
    .then((text) => {
      current_q = current_q + 1;
      var textArray = text.split('&');
      avail_questions = parseInt(textArray[1]);
      question = textArray[current_q+1];
      questionArray = question.split('{}');
      document.getElementById("evaluation_num").value = current_q;
      document.getElementById("evaluation_num").innerHTML = "Evaluation #" + current_q;
      document.getElementById("evaluation_image").src = questionArray[1];
      document.getElementById("evaluation_question").innerHTML = questionArray[2];
      var choices = document.getElementsByClassName("choice");
      var choice_labels = document.getElementsByClassName("choice_label");
      for (var i = 0, length = choices.length; i < length; i++) {
        choices[i].innerHTML = questionArray[i+3];
        choices[i].value = questionArray[i+3];
        choice_labels[i].style.color = "black";
        choice_labels[i].innerHTML = questionArray[i+3];
        if (choices[i].checked) {
           choices[i].checked = false;
        }
      }
      document.getElementById("notification").innerHTML = "";
      can_next_eval = false;
    })
    .catch((e) => console.error(e));
  } else {
    if (current_q == avail_questions) {
      document.getElementById("notification").innerHTML = "Finished! Save your score above!";
    } else if (can_next_eval == false){
      document.getElementById("notification").innerHTML = "Please submit your answer before going to the next evaluation.";
    }
  }
}

function Submit() { //compares the answer submitted with the correct answer from the evaluation file and updates the evaluation score
  var notif = document.getElementById("notification");
  if (!submit_bool){
    var correct = "";
    fetch("/cs2mulch/assets/evaluations/" + page[5] + ".txt")
    .then((res) => res.text())
    .then((text) => {
      var textArray = text.split('&');
      var avail_exercises = parseInt(textArray[1]);
      question = textArray[current_q+1];
      questionArray = question.split('{}');
      correct = questionArray[7];
      correct = correct.toString().trim();
      var choices = document.getElementsByClassName('choice');
      var choice_labels = document.getElementsByClassName('choice_label')
      var val= "";
      for (var i = 0, length = choices.length; i < length; i++) {
        if (choices[i].value.toString().trim() == correct) {
          var correct_choice = i;
        }
        if (choices[i].checked) {
           val = choices[i].value;
           choices[i].checked = false
           var user_choice = i;
        }
      }

      val = val.toString().trim();
      var score = document.getElementById("score");
      if (val == "" ) {
        notif.innerHTML = "Please select an answer.";
      } else if ( val === correct ) {
        choice_labels[user_choice].style.color = "green";
        notif.innerHTML = "Correct! Click Next Evaluation and keep going!";
        num_score = num_score + 1;
        score.innerHTML = "Score: " + num_score + "/" + avail_questions;
        submit_bool = true;
        can_next_eval = true;
      } else {
        choice_labels[user_choice].style.color = "red";
        choice_labels[correct_choice].style.color = "green";
        notif.innerHTML = "Incorrect, Click New Evaluation and try again!";
        submit_bool = true;
        can_next_eval = true;
      }
    })
    .catch((e) => console.error(e));
  } else {
    notif.innerHTML = "You've already submitted this evaluation, click New Evaluation above."
  }
}

function print_questions() { //sends a token of what page's evaluation needs to be printed and how many questions to a separate printable md file
  num_q = document.getElementById("numbers").value;
  var myData = [ page[5], num_q ];
  localStorage.setItem( 'token', myData);
  window.location = "/cs2mulch/worksheet/";
}

window.onload = populate();
