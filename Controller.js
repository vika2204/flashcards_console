const Model = require('./Model')
const inquirer = require('inquirer')

class Controller {
  constructor(model, score) {
    this.model = model
    this.score = 0
  }

  getTopic() {
    return inquirer.prompt([{
      type: 'list',
      name: 'topic',
      message: 'Выберите тему квиза?',
      choices: [
        {name:'Фильмы', value: Model.questionsVika}, 
        {name:'Рандом', value: Model.questionsAndrey}, 
        {name:'Дюна', value: Model.questionsAlex},
        {name:'Выход', value: 4}
      ]
    }])
  }

  async quiz() {
    const {topic} = await this.getTopic()
    //console.log(topic);
    

    // topic.forEach(question => inquirer.prompt([question]).then(answers => {
    //   const userAnswer = answers[question.name];
    //   const correctAnswer = question.correctAnswer;
    //   console.log(question);
    //   console.log('//////////');
      
    //   console.log(userAnswer);
      
      

    //   if (userAnswer === correctAnswer) {
    //     console.log(`Правильно! ${question.message}`);
    //   } else {
    //     console.log(`Неправильно. ${question.message} - Правильный ответ: ${question.choices.find(choice => choice.value === correctAnswer).name}`);
    //   }

    //   //score += userAnswer;
    //   //askQuestion(index + 1);
    // }))
    
    const res = inquirer.prompt(topic)
      .then(answers => Object.values(answers).reduce((accum, el) => accum + el, 0))
      console.log(`Очки за игру - ${res}`);
    return res
  }
}

const quizz = new Controller(new Model())
quizz.quiz()

module.exports = Controller