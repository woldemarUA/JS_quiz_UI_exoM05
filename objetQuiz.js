export const southOfFranceQuiz = {
  quiz: [
    {
      question: 'Quelle ville est célèbre pour son festival annuel du film ?',
      answers: [
        { answer: 'Nice', correct: false },
        { answer: 'Cannes', correct: true },
        { answer: 'Marseille', correct: false },
        { answer: 'Montpellier', correct: false },
      ],
    },
    {
      question: 'Quel est le nom du célèbre aqueduc romain dans la région ?',
      answers: [
        { answer: 'Pont du Gard', correct: true },
        { answer: 'Pont Neuf', correct: false },
        { answer: 'Viaduc de Millau', correct: false },
        { answer: 'Aqueduc de Roquefavour', correct: false },
      ],
    },
    {
      question: 'Quel parc naturel régional est situé en Camargue ?',
      answers: [
        { answer: 'Parc naturel régional des Grands Causses', correct: false },
        { answer: 'Parc national des Calanques', correct: false },
        { answer: 'Parc naturel régional de Camargue', correct: true },
        {
          answer: 'Parc naturel régional de la Narbonnaise en Méditerranée',
          correct: false,
        },
      ],
    },
    {
      question:
        "Quel est le plat traditionnel de la région provençale à base de tomates, d'aubergines et de courgettes ?",
      answers: [
        { answer: 'Ratatouille', correct: true },
        { answer: 'Bouillabaisse', correct: false },
        { answer: 'Salade niçoise', correct: false },
        { answer: 'Daube', correct: false },
      ],
    },
    {
      question: 'Quelle ville est réputée pour sa production de parfum ?',
      answers: [
        { answer: 'Avignon', correct: false },
        { answer: 'Grasse', correct: true },
        { answer: 'Aix-en-Provence', correct: false },
        { answer: 'Toulon', correct: false },
      ],
    },
    {
      question: 'Quelle est la plus grande ville de la région Occitanie ?',
      answers: [
        { answer: 'Toulouse', correct: true },
        { answer: 'Montpellier', correct: false },
        { answer: 'Nîmes', correct: false },
        { answer: 'Perpignan', correct: false },
      ],
    },
    {
      question:
        "Quelle montagne est située à la frontière entre la France et l'Espagne dans les Pyrénées ?",
      answers: [
        { answer: 'Mont Ventoux', correct: false },
        { answer: 'Pic du Midi', correct: false },
        { answer: 'Mont Canigou', correct: true },
        { answer: "Pic du Midi d'Ossau", correct: false },
      ],
    },
    {
      question:
        'Quel célèbre festival musical se déroule à Arles chaque année ?',
      answers: [
        { answer: 'Festival de Cannes', correct: false },
        { answer: "Festival d'Avignon", correct: false },
        { answer: 'Festival de Marseille', correct: false },
        { answer: "Les Rencontres d'Arles", correct: true },
      ],
    },
    {
      question:
        'Quelle plage est réputée pour ses falaises ocres et ses eaux turquoises ?',
      answers: [
        { answer: 'Plage de la Corniche', correct: false },
        { answer: 'Plage de Pampelonne', correct: false },
        { answer: 'Plage de Palombaggia', correct: true },
        { answer: "Plage de l'Espiguette", correct: false },
      ],
    },
    {
      question:
        'Quel monument romain est situé à Nîmes et est connu pour ses arènes bien préservées ?',
      answers: [
        { answer: "Théâtre antique d'Orange", correct: false },
        { answer: 'Arènes de Lutèce', correct: false },
        { answer: 'Arènes de Nîmes', correct: true },
        { answer: 'Pont du Gard', correct: false },
      ],
    },
  ],
};

const { quiz } = southOfFranceQuiz;
for (const [i, question] of quiz.entries()) {
  const { answers } = question;

  for (const [index, answer] of answers.entries())
    answer.id = `reponse-${i}-${index}`;
}
