const inquirer = require('inquirer');

const quiz = [
  {
    type: 'list',
    name: 'theme',
    message: 'Выберите тему квиза:',
    choices: [
      { name: 'История', value: 'История' },
      { name: 'Наука', value: 'Наука' },
      { name: 'Культура', value: 'Культура' },
    ],
  },
];

const historyQuestions = [
  {
    type: 'list',
    name: 'q1',
    message: 'В каком году началась Первая мировая война?',
    choices: [
      { name: '1914', value: 1 },
      { name: '1915', value: -1 },
      { name: '1916', value: -1 },
      { name: '1917', value: -1 },
    ],
    correctAnswer: 1,
  },
  {
    type: 'list',
    name: 'q2',
    message: 'Кто был первым президентом США?',
    choices: [
      { name: 'Джордж Вашингтон', value: 1 },
      { name: 'Томас Джефферсон', value: -1 },
      { name: 'Авраам Линкольн', value: -1 },
      { name: 'Барак Обама', value: -1 },
    ],
    correctAnswer: 1,
  },
];

const scienceQuestions = [
  {
    type: 'list',
    name: 'q1',
    message: 'Какой элемент имеет атомный номер 1?',
    choices: [
      { name: 'Кислород', value: -1 },
      { name: 'Водород', value: 1 },
      { name: 'Углерод', value: -1 },
      { name: 'Гелий', value: -1 },
    ],
    correctAnswer: 1,
  },
  {
    type: 'list',
    name: 'q2',
    message: 'Какая планета ближе всего к Солнцу?',
    choices: [
      { name: 'Земля', value: -1 },
      { name: 'Марс', value: -1 },
      { name: 'Венера', value: -1 },
      { name: 'Меркурий', value: 1 },
    ],
    correctAnswer: 1,
  },
];

const cultureQuestions = [
  {
    type: 'list',
    name: 'q1',
    message: 'Кто написал роман "Война и мир"?',
    choices: [
      { name: 'Федор Достоевский', value: -1 },
      { name: 'Лев Толстой', value: 1 },
      { name: 'Антон Чехов', value: -1 },
      { name: 'Иван Тургенев', value: -1 },
    ],
    correctAnswer: 1,
  },
  {
    type: 'list',
    name: 'q2',
    message: 'Какой композитор написал "Лунную сонату"?',
    choices: [
      { name: 'Бетховен', value: 1 },
      { name: 'Моцарт', value: -1 },
      { name: 'Бах', value: -1 },
      { name: 'Шопен', value: -1 },
    ],
    correctAnswer: 1,
  },
];

function runQuiz(questions) {
  let score = 0;

  function askQuestion(index) {
    if (index >= questions.length) {
      console.log(`Ваш результат: ${score} баллов`);
      return;
    }

    const question = questions[index];

    inquirer.prompt([question]).then(answers => {
      const userAnswer = answers[question.name];
      const correctAnswer = question.correctAnswer;

      if (userAnswer === correctAnswer) {
        console.log(`Правильно! ${question.message}`);
      } else {
        console.log(`Неправильно. ${question.message} - Правильный ответ: ${question.choices.find(choice => choice.value === correctAnswer).name}`);
      }

      score += userAnswer;
      askQuestion(index + 1);
    });
  }

  askQuestion(0);
}

inquirer.prompt(quiz).then(answers => {
  switch (answers.theme) {
    case 'История':
      runQuiz(historyQuestions);
      break;
    case 'Наука':
      runQuiz(scienceQuestions);
      break;
    case 'Культура':
      runQuiz(cultureQuestions);
      break;
    default:
      console.log('Неверный выбор темы.');
  }
});