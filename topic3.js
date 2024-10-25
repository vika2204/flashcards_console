const topic3 = [
  {
    type: 'list',
    name: '1 вопрос',
    message: 'Сколько километров в миле?',
    choices: [
      { name: '0,8', value: 0 },
      { name: '2,4', value: 0 },
      { name: '1,6', value: 1 },
    ],
  },
  {
    type: 'list',
    name: '2 вопрос',
    message: 'На языке строителей скажите "вверх!"',
    choices: [
      { name: 'Вира', value: 1 },
      { name: 'Майна', value: 0 },
      { name: 'Поднимай уже', value: 0 },
    ],
  },
  {
    type: 'input',
    name: '3 вопрос',
    message: 'Продолжите фразу "Нас ... а мы крепчаем"',
    // validate: function (input) {
      // if (input !== 'reboot') {
      //   return 'Имя должно содержать минимум 3 символа.';
      // }
      // return true;
    // },
  },
  {
    type: 'list',
    name: '4 вопрос',
    message: 'Лучший кондитер Elbrus bootcamp?',
    choices: [
      { name: 'Полина', value: 1 },
      { name: 'Милана', value: 0 },
      { name: 'Айгиз', value: 0 },
    ],
  },
  {
    type: 'list',
    name: '5 вопрос',
    message: 'В чем измеряется сила тока?',
    choices: [
      { name: 'Вольт', value: 0 },
      { name: 'Ампер', value: 1 },
      { name: 'Ватт', value: 0 },
    ],
  },

  //   when: (answers) => answers.bonuses > 0,
  // },
];