const filmsQuestions = [
    {
      type: 'list',
      name: 'q1',
      message: 'Как зовут главного пупса в мульте Ох уж эти детки?',
      choices: [
        { name: 'Томми', value: 1 },
        { name: 'Чакки', value: 0 },
        { name: 'Тимми', value: 0 },
        { name: 'Арнольд', value: 0 },
      ],
      correctAnswer: 1,
    },
    {
      type: 'list',
      name: 'q2',
      message: 'Чья это кожа, Белла?',
      choices: [
        { name: 'Любовника', value: 0 },
        { name: 'Убийцы', value: 1 },
        { name: 'Вампира', value: 0 },
        { name: 'Я не знаю, Эдвард', value: 0 },
      ],
      correctAnswer: 2,
    },
    {
        type: 'list',
        name: 'q2',
        message: 'Какое "мародёрское" имя было у Сириуса Блэка?',
        choices: [
          { name: 'Лунатик', value: 0 },
          { name: 'Хвост', value: 0 },
          { name: 'Бродяга', value: 1 },
          { name: 'Лунатик', value: 0 },
        ],
        correctAnswer: 3,
      },
      {
        type: 'list',
        name: 'q2',
        message: 'Чем пропитывается дингльбоб при изготовлении плюмбуса в Рике и Морти?',
        choices: [
          { name: 'Шлиим', value: 1 },
          { name: 'Грубба', value: 0 },
          { name: 'Флибовый сок', value: 2 },
          { name: 'Шлами', value: 0 },
        ],
        correctAnswer: 1,
      },
      {
        type: 'list',
        name: 'q2',
        message: 'Любимый сын Денетора во Властилине колец??',
        choices: [
          { name: 'Фарамир', value: 0 },
          { name: 'Боромир', value: 1 },
          { name: 'Фарамир', value: 0 },
          { name: 'Фарамир', value: 0 },
        ],
        correctAnswer: 2,
      },
  ];