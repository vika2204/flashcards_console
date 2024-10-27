class Model {
  static questionsVika = [
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
      //correctAnswer: 1,
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
      //correctAnswer: 2,
    },
    {
        type: 'list',
        name: 'q3',
        message: 'Какое "мародёрское" имя было у Сириуса Блэка?',
        choices: [
          { name: 'Лунатик', value: 0 },
          { name: 'Хвост', value: 0 },
          { name: 'Бродяга', value: 1 },
          { name: 'Лунатик', value: 0 },
        ],
        //correctAnswer: 3,
      },
      {
        type: 'list',
        name: 'q4',
        message: 'Чем пропитывается дингльбоб при изготовлении плюмбуса в Рике и Морти?',
        choices: [
          { name: 'Шлиим', value: 1 },
          { name: 'Грубба', value: 0 },
          { name: 'Флибовый сок', value: 2 },
          { name: 'Шлами', value: 0 },
        ],
        //correctAnswer: 1,
      },
      {
        type: 'list',
        name: 'q5',
        message: 'Любимый сын Денетора во Властелине колец??',
        choices: [
          { name: 'Фарамир', value: 0 },
          { name: 'Боромир', value: 1 },
          { name: 'Фарамир', value: 0 },
          { name: 'Фарамир', value: 0 },
        ],
        //correctAnswer: 2,
      },

  ]

  static questionsAndrey = [
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
      //   if (input) {
      //     return 'Имя должно содержать минимум 3 символа.';
      //   }
      //   return true;
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
  ]
  
  static questionsAlex = [
    {
      type: 'list',
      name: '1',
      message: 'Как называется пустынная планета на которой добывают меланж?',
      choices: [{name:'Тардис', value: 0}, {name:'Анфис', value: 0}, {name:'ЛудаКрис', value: 0}, {name:'Арракис', value: 1}],
    },
    {
      type: 'list',
      name: '2',
      message: 'Как Фримены называют песчаного червя?',
      choices: [{name:'Чай-Хана', value: 0}, {name:'Шай-Тан', value: 0}, {name:'Шаи-Хулуд', value: 1}, {name:'ЧаЙ-Тулум', value: 0}],
    },
    {
      type: 'list',
      name: '3',
      message: 'Кто рассказывает вступление к фильму/книге?',
      choices: [{name:'Чани', value: 0}, {name:'Пол Атрейдес', value: 0}, {name:'Леди Джессика', value: 0}, {name:'принцесса Ирулан', value: 1}],
    },
    {
      type: 'list',
      name: '4',
      message: 'Кто предал герцога Лето?',
      choices: [{name:'Дункан Айдахо', value: 0}, {name:'Леди Джессика', value: 0}, {name:'Гурни Халек', value: 0}, {name:'Веллингтон Юэ', value: 1}],
    },
    {
      type: 'list',
      name: '5',
      message: 'Как зовут отца Чани?',
      choices: [{name:'Ланит', value: 0}, {name:'Лиет', value: 1}, {name:'Ля Дед', value: 0}, {name:'Паштет', value: 0}],
    },
    {
      type: 'list',
      name: '6',
      message: 'Как на языке фрименов называется кенгуровая мышь?',
      choices: [{name:'Усул', value: 0}, {name:'Сардаукар', value: 0}, {name:'МуадДиб', value: 1}, {name:'Федайкин', value: 0}],
    },
    {
      type: 'list',
      name: '7',
      message: 'К чему НЕ сидеть спиной Полу Атредесу говорил Гурни Халек?',
      choices: [{name:'к двери', value: 1}, {name:'к матер', value: 0}, {name:'к врагу', value: 0}, {name:'к туалету', value: 0}],
    },
  ]
}


module.exports = Model