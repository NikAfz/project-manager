export default localStorage.getItem('todoData') ? JSON.parse(localStorage.getItem('todoData')) : [
  {
    id : 1,
    toDoName : 'ProM 1.0',
    innerToDo : [
      'you can add projects and add a todo for that project',
      '------------------------------------',
      'you can remove the projects that you have finished',
      'and enjoy those dopamine hits ',
      '------------------------------------',
      'and finally dont forget to see the projects code in GitHub :)',
    ]
  },
]