// const inquirer = require('inquirer')

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'Введи своё имя, фримен?',
//     }, 
//     {
//       type: 'list',
//       name: 'first',
//       message: 'Как называется пустынная планета на которой добывают меланж?',
//       choices: ['Тардис', 'Анфис', 'ЛудаКрис', 'Арракис'],
//       default: 'Арракис'
//     },
//   ]).then(answers => {
//     console.log(`Хорошая работа, ${answers.name}!`);
//   }).then(answers => {
//     console.log(`Верно, ${answers.default}`);
//   })
  
    

  // .prompt([
    
  // ])
  // .then(answers => {
  //   console.info('Answer:', answers.faveReptile);
  // });


  // inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'Введи своё имя, фримен?',
//     }, 
//     {
//       type: 'list',
//       name: 'first',
//       message: 'Как называется пустынная планета на которой добывают меланж?',
//       //choices: [{name:'Тардис', value: 0}, {name:'Анфис', value: 0}, {name:'ЛудаКрис', value: 0}, {name:'Арракис', value: 1}],
//       choices: ['Тардис', 'Анфис', 'ЛудаКрис', 'Арракис'],
//       validate(value) {
//         console.log(value.fi);
        
//         console.log('jdfidfj');

//         return true
        
//       }
//       //choices: [{name:'Тардис', value: 0}, {name:'Анфис', value: 0}, {name:'ЛудаКрис', value: 0}, {name:'Арракис', value: 1}],
//       //default: 'Арракис'
//     },
//     // {
//     //   type: 'list',
//     //   name: 'first',
//     //   message: 'Как называется пустынная планета на которой добывают меланж?',
//     //   choices: ['Тардис', 'Анфис', 'ЛудаКрис', 'Арракис'],
//     //   validate(value) {
//     //     if (value) {
//     //       return true
//     //     }
//     //     console.log('jdfidfj');

//     //     return true
        
//     //   }
//     //   //choices: [{name:'Тардис', value: 0}, {name:'Анфис', value: 0}, {name:'ЛудаКрис', value: 0}, {name:'Арракис', value: 1}],
//     //   //default: 'Арракис'
//     // },
//   ]).then(answers => {
//     console.log(answers);
    
//     // if (answers) {
//     //   console.log(`Хорошая работа, ${answers.name}!`);
//     // } else {
//     //   console.log(`Все плохо, ${answers.name}!`);
//     // }
//   })
  // .then(answers => {
  //   console.log(`Верно, ${answers.name}`);
  // })

// const prompts = new Rx.Subject();
// inquirer.prompt(prompts);

// prompts.next({
//   /* question... */
// });
