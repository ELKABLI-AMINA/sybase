"use strict";

var arrObj = [];

function getJson_data() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      arrObj = JSON.parse(this.responseText);
      randoom(arrObj.length);
    }
  };

  xhr.open("GET", "../assets/js/data.json", true);
  xhr.send();
}

var correct = 0;
var totalCorrect = 0;
var count = 0;
var range = [];

function Show_data() {
  if (count < arrObj.length) {
    correct = arrObj[range[count]].correct;
    document.getElementById("question").innerText = arrObj[range[count]].question;
    document.getElementById("answers").innerHTML = "";
    document.getElementById("countquestion").innerText = count + 1 + "/" + arrObj.length;

    for (i = 0; i < arrObj[range[count]].answer.length; i++) {
      document.getElementById("answers").innerHTML += arrObj[range[count]].answer[i];
    }
  }
}

function get_data() {
  function random(max) {
    var newnum;

    for (var _i = 1; _i <= max; _i++) {
      newnum = Math.floor(Math.random() * max);

      while (range.includes(newnum)) {
        newnum = Math.floor(Math.random() * max);
      }

      range.push(newnum);
    }
  }
}