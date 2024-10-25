


const inquirer = require(

inquirer
  .prompt([
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
  ]).then(answers => {
    console.log(`Хорошая работа, ${answers.name}!`);
  })
)
