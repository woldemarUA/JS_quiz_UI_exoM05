'use strict';

import { modalWindow } from './modal.js';

// variable pour stocker le score
let score = 0;
// variable pour retracer le nombre de questions tentées/répondues
let answered = 0;

function launchModal() {
  let myModal = new bootstrap.Modal(document.getElementById('quizModal'));
  myModal.show();
  myModal._element.addEventListener('hidden.bs.modal', function () {
    getArticle();
  });
}

const app = document.getElementById('app');
const quizBody = document.createElement('div');
app.appendChild(quizBody);

// fonction pour changer les classes une fois la réponse cliquée

function changeStyleBtn(arr) {
  for (const item of arr) {
    const { answer, correct, id } = item;

    const btn = document.getElementById(id);
    btn.onclick = false;
    if (correct) {
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-success');
    } else {
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-danger');
    }
  }
}

// fonction qui gère l'événement onclick

const btnOnclick = (btn, verifier, answers, length) => {
  answered++;

  changeStyleBtn(answers);

  const faux = answers.filter((el) => !el.correct);

  if (verifier) {
    btn.className = 'btn btn-success m-1';
    changeStyleBtn(faux);
    score++;
  }

  if (answered === length) {
    app.appendChild(modalWindow(score, answered));
    launchModal();
  }
};

// fonction pour générer l'élément de quiz

function createQuizElement(quiz) {
  const el = document.createElement('div');
  el.className = 'row';
  for (const item of quiz) {
    const { question, answers } = item;
    const card = document.createElement('div');
    card.className = 'card col-lg-3 m-1 p-1';
    const cardBody = document.createElement('div');

    const cardHeader = document.createElement('p');
    cardHeader.className = 'h5';
    cardHeader.innerHTML = question;

    const reponses = document.createElement('div');
    for (const repons of answers) {
      const { answer, correct, id } = repons;

      const repDiv = document.createElement('div');
      repDiv.className = 'row m-1';
      const rep = document.createElement('div');
      repDiv.appendChild(rep);
      rep.className = 'btn btn-primary m-1 row ';
      rep.innerHTML = answer;
      rep.id = id;
      rep.onclick = () => btnOnclick(rep, correct, answers, quiz.length);
      reponses.appendChild(repDiv);
    }
    cardBody.appendChild(cardHeader);
    cardBody.appendChild(reponses);
    card.appendChild(cardBody);
    el.appendChild(card);
  }
  return el;
}

// fonction pour commencer le quiz et generer to les elements

function init(quiz) {
  quizBody.innerHTML = '';

  score = 0;
  answered = 0;

  const card = createQuizElement(quiz);

  quizBody.appendChild(card);
}

// fonction pour ajout ID à reponse element (il n'en a pas existé en JSON objet). J'ai besoin de ça pour travail avec les classes de reponses

function addIdAnswers(quiz) {
  //quiz c'est le tableau
  for (const [i, question] of quiz.entries()) {
    const { answers } = question;
    for (const [index, answer] of answers.entries())
      answer.id = `reponse-${i}-${index}`;
  }

  return quiz;
}

// fonction pour faire le requette de données externes à l'aide de fetch

async function getArticle() {
  try {
    const response = await fetch('quiz.json');
    const data = await response.json();

    let { quiz } = data;
    quiz = addIdAnswers(quiz);

    init(quiz);
    return data;
  } catch (err) {
    return console.log(err);
  }
}

// demande de données externes à l'aide de fetch et lancer l'appli
getArticle();
