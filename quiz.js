'use strict';

// Importation de la fonction modalWindow depuis le fichier modal.js
import { modalWindow } from './modal.js';

// Variable pour stocker le score
let score = 0;
// Variable pour retracer le nombre de questions tentées/répondues
let answered = 0;

// Fonction pour lancer la fenêtre modale
function launchModal() {
  // Création d'une nouvelle instance de la classe Modal de Bootstrap avec l'élément ayant l'ID 'quizModal'
  let myModal = new bootstrap.Modal(document.getElementById('quizModal'));
  // Affichage de la fenêtre modale
  myModal.show();
  // Ajout d'un écouteur d'événement pour détecter la fermeture de la fenêtre modale
  myModal._element.addEventListener('hidden.bs.modal', function () {
    // Appel de la fonction getArticle() après la fermeture de la fenêtre modale
    getArticle();
  });
}

// Sélection de l'élément HTML avec l'ID 'app'
const app = document.getElementById('app');
// Création d'un élément div pour le corps du quiz
const quizBody = document.createElement('div');
// Ajout du corps du quiz à l'élément avec l'ID 'app'
app.appendChild(quizBody);

// Fonction pour changer les classes une fois la réponse cliquée
function changeStyleBtn(arr) {
  for (const item of arr) {
    const { answer, correct, id } = item;
    // Sélection du bouton par son ID
    const btn = document.getElementById(id);
    // Désactivation de la fonction onclick pour éviter les clics supplémentaires
    btn.onclick = false;
    // Modification des classes du bouton en fonction de la correction de la réponse
    if (correct) {
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-success');
    } else {
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-danger');
    }
  }
}

// Fonction qui gère l'événement onclick
const btnOnclick = (btn, verifier, answers, length) => {
  // Incrémentation du nombre de questions tentées/répondues
  answered++;
  // Appel de la fonction pour changer les styles des boutons
  changeStyleBtn(answers);

  // Filtrage des réponses incorrectes
  const faux = answers.filter((el) => !el.correct);

  if (verifier) {
    // Modification de la classe du bouton en cas de réponse correcte
    btn.className = 'btn btn-success m-1';
    // Appel de la fonction pour changer les styles des boutons incorrects
    changeStyleBtn(faux);
    // Incrémentation du score en cas de réponse correcte
    score++;
  }

  // Vérification si toutes les questions ont été répondues
  if (answered === length) {
    // Ajout de la fenêtre modale avec le score et le nombre total de questions
    app.appendChild(modalWindow(score, answered));
    // Lancement de la fenêtre modale
    launchModal();
  }
};

// Fonction pour générer l'élément de quiz
function createQuizElement(quiz) {
  // Création d'un élément div
  const el = document.createElement('div');
  el.className = 'row';

  // Parcours des questions du quiz
  for (const item of quiz) {
    const { question, answers } = item;
    // Création d'une carte Bootstrap pour chaque question
    const card = document.createElement('div');
    card.className = 'card col-lg-3 m-1 p-1';
    const cardBody = document.createElement('div');

    // Création d'un en-tête de carte contenant la question
    const cardHeader = document.createElement('p');
    cardHeader.className = 'h5';
    cardHeader.innerHTML = question;

    // Création d'un conteneur pour les réponses
    const reponses = document.createElement('div');
    // Parcours des réponses de chaque question
    for (const repons of answers) {
      const { answer, correct, id } = repons;

      // Création d'un div pour chaque réponse
      const repDiv = document.createElement('div');
      repDiv.className = 'row m-1';
      const rep = document.createElement('div');
      repDiv.appendChild(rep);
      // Création d'un bouton avec la réponse et l'ID
      rep.className = 'btn btn-primary m-1 row ';
      rep.innerHTML = answer;
      rep.id = id;
      // Ajout de la fonction onclick pour gérer les clics sur les réponses
      rep.onclick = () => btnOnclick(rep, correct, answers, quiz.length);
      reponses.appendChild(repDiv);
    }
    // Ajout de l'en-tête et des réponses à la carte
    cardBody.appendChild(cardHeader);
    cardBody.appendChild(reponses);
    card.appendChild(cardBody);
    // Ajout de la carte à l'élément div
    el.appendChild(card);
  }
  return el;
}

// Fonction pour commencer le quiz et générer tous les éléments
function init(quiz) {
  // Réinitialisation du corps du quiz
  quizBody.innerHTML = '';

  // Réinitialisation du score et du nombre de questions tentées/répondues
  score = 0;
  answered = 0;

  // Création de l'élément de quiz
  const card = createQuizElement(quiz);

  // Ajout de l'élément de quiz au corps du quiz
  quizBody.appendChild(card);
}

// Fonction pour ajouter un ID aux éléments de réponse (non inclus dans l'objet JSON). Nécessaire pour travailler avec les classes de réponses
function addIdAnswers(quiz) {
  // Parcours du tableau de questions
  for (const [i, question] of quiz.entries()) {
    const { answers } = question;
    // Parcours du tableau de réponses de chaque question
    // Attribution d'un ID à chaque réponse
    for (const [index, answer] of answers.entries())
      answer.id = `reponse-${i}-${index}`;
  }

  return quiz;
}

// Fonction pour effectuer la requête de données externes à l'aide de fetch
async function getArticle() {
  try {
    // Requête fetch pour récupérer les données depuis le fichier quiz.json
    const response = await fetch('quiz.json');
    // Conversion des données en format JSON
    const data = await response.json();

    let { quiz } = data;
    // Ajout des ID aux réponses
    quiz = addIdAnswers(quiz);

    // Initialisation du quiz avec les données obtenues
    init(quiz);
    // Retour des données pour référence
    return data;
  } catch (err) {
    // Gestion des erreurs en cas d'échec de la requête
    return console.log(err);
  }
}

// Appel de la fonction pour effectuer la requête de données externes et lancer l'application
getArticle();
