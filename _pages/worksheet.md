---
title: Worksheet
permalink: /worksheet/
sidebar:
  nav: "tree"
---

## Name:

### Date:

<script type="text/javascript">

  var myData = localStorage['token'];
  localStorage.removeItem( 'token' ); // Clear the localStorage
  var textArray = myData.split(',');
  var firstData = textArray[0];
  var secondData = textArray[1];
  var q_num = 2;

  function makeworksheet() {
    for (var i = 0; i < secondData; i++) {
      populateQuestion(i);
    }
  }

  function populateQuestion(id_num) {

      worksheet = document.getElementById('date');
      evaluation_bumper = document.createElement("DIV");
      evaluation_bumper.setAttribute("class", "bumper");
      evaluation_bumper.setAttribute("id", "evaluation_bumper" + id_num);

      evaluation_title_bumper = document.createElement("DIV");
      evaluation_title_bumper.setAttribute("class", "bumper");
      evaluation_title_bumper.setAttribute("id","evaluation_title_bumper" +id_num);
      evaluation_num = document.createElement("TEXT");
      evaluation_num.setAttribute("id", "evaluation_num" + id_num)
      evaluation_num.setAttribute("value","1");
      evaluation_num.setAttribute("style","font-family:Fredoka One");
      evaluation_num.innerHTML = "Evaluation #";
      evaluation_title_bumper.appendChild(evaluation_num);
      evaluation_bumper.appendChild(evaluation_title_bumper);

      evaluation_image_bumper = document.createElement("DIV");
      evaluation_image_bumper.setAttribute("class", "bumper");
      evaluation_image = document.createElement("IMG");
      evaluation_image.setAttribute("id", "evaluation_image" + id_num);
      evaluation_image.setAttribute("src", "/cs2mulch/assets/images/gsort10.png");
      evaluation_image.setAttribute("alt", "test image");
      evaluation_image.setAttribute("style", "max-height: 350px");
      evaluation_image_bumper.appendChild(evaluation_image);
      evaluation_title_bumper.after(evaluation_image_bumper);

      evaluation_question_bumper = document.createElement("DIV");
      evaluation_question_bumper.setAttribute("class", "bumper");
      evaluation_question_bumper.setAttribute("id","evaluation_question_bumper" + id_num);
      evaluation_question = document.createElement("TEXT");
      evaluation_question.setAttribute("id","evaluation_question" + id_num);
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
        temp_choice.setAttribute("id", "choice_" + i + "" + id_num);
        temp_choice.setAttribute("value", "Choice " + i + "" + id_num);
        temp_choice.setAttribute("class", "choice" + id_num);
        label_temp_choice = document.createElement("LABEL");
        label_temp_choice.setAttribute("for", "choice_" + i + "" + id_num);
        label_temp_choice.setAttribute("class", "choice_label" + id_num);
        label_temp_choice.innerHTML = "Choice " + i;
        temp_bumper.appendChild(temp_choice);
        temp_bumper.appendChild(label_temp_choice);
        checkbox_form.appendChild(temp_bumper);
      }
      evaluation_question_bumper.after(checkbox_form);

      if (id_num == 0) {
        worksheet.after(evaluation_bumper);
      }else {
        temp = id_num - 1;
        previous_bumper = document.getElementById("evaluation_bumper" + temp);
        if (previous_bumper == null){
          alert("8==D");
        }
        previous_bumper.after(evaluation_bumper);
      }
      newEvaluation(id_num);

  }

  function newEvaluation(id_num) {
    fetch("/cs2mulch/assets/evaluations/"+ firstData + ".txt")
    .then((res) => res.text())
    .then((text) => {
      var textArray = text.split('&');
      var question = textArray[id_num+2];
      var questionArray = question.split('{}');
      var temp_q_num = id_num + 1;
      document.getElementById("evaluation_num" + id_num).value = temp_q_num;
      document.getElementById("evaluation_num" + id_num).innerHTML = "Evaluation #" + temp_q_num;
      document.getElementById("evaluation_image" + id_num).src = questionArray[1];
      document.getElementById("evaluation_question" + id_num).innerHTML = questionArray[2];
      var choices = document.getElementsByClassName("choice" + id_num);
      var choice_labels = document.getElementsByClassName("choice_label" +id_num);
      for (var i = 0, length = choices.length; i < length; i++) {
        choices[i].innerHTML = questionArray[i+3];
        choices[i].value = questionArray[i+3];
        choice_labels[i].style.color = "black";
        choice_labels[i].innerHTML = questionArray[i+3];
      }
    })
    .catch((e) => console.error(e));
  }


  window.onload = makeworksheet();


</script>
