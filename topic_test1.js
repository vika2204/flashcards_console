const inquirer = require('inquirer')

const questions1 = [
    {
        type: 'list',
        name: 'topic1',
        message: 'Вопрос номер 1?',
        choices: [
            {name: 'неверный ответ', value: 0}, 
            {name: 'ваау!', value: 2},
            {name: 'неверный ответ', value: 0},
        ],
        correctAnswer: 'ваау!',
      },

      {
        type: 'list',
        name: 'topic1',
        message: 'Вопрос номер 2?',
        choices: [
            {name: 'тратата', value: 2}, 
            {name: 'неверный ответ', value: 0},
            {name: 'неверный ответ', value: 0},
        ],
        correctAnswer: 'тратата!',
        // validate(value){
        //     if(choices[0].value) {
        //         console.log('круто!')
        //         return true
        //     }
        //     else {
        //         console.log('ну камоон!')
        //         return true
        //     }
        },

        {
        type: 'list',
        name: 'topic1',
        message: 'Вопрос номер 3?',
        choices: [
            {name: 'неверный ответ', value: 0}, 
            {name: 'неверный ответ', value: 0},
            {name: '6', value: 2},
        ],
        correctAnswer: '6',
      },

      {
        type: 'list',
        name: 'topic1',
        message: 'Вопрос номер 4?',
        choices: [
            {name: 'неверный ответ', value: 0}, 
            {name: 'ваау!', value: 2},
            {name: 'неверный ответ', value: 0},
        ],
        correctAnswer: 'ваау!',
      },

      {
        type: 'list',
        name: 'topic1',
        message: 'Вопрос номер 5?',
        choices: [
            {name: 'неверный ответ', value: 0}, 
            {name: 'ваау!', value: 2},
            {name: 'неверный ответ', value: 0},
        ],
        correctAnswer: 'ваау!',
      },

]
// inquirer.prompt(questions1).then(answers => {
//     questions1.forEach(question => {
//       if (answers[question.name] === question.correctAnswer) {
//         console.log(`Правильно! ${question.message} - ${question.correctAnswer}`);
//       } else {
//         console.log(`Неправильно. ${question.message} - Правильный ответ: ${question.correctAnswer}`);
//       }
//     });
// })

inquirer.prompt(questions1).then((answers) => {
    console.log(answers)
    // console.log('\nOrder receipt:');
    // console.log(JSON.stringify(answers, null, '  '));
  });

