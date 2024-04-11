export const confirmQuestions = {
  deleteTask: {
    title: 'Delete Task?',
    content: 'Are you sure you want to delete task. It is an unrecoverable action.',
    options: {cancel: 'Cancel', confirm: 'Delete'},
    type: 'warning'
  },
  goHome: {
    title: 'Go Home?',
    content: 'Are you sure you want to return to home page? In such case all changes will be reset 🧹 ',
    options: {cancel: 'Stay Here', confirm: 'Go Home'},
    type: 'warning'
  }
};
