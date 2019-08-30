import ToDoModel from 'src/models/ToDoModel';

export function addToDo(context: any, todoModel: ToDoModel) {
  return new Promise(resolve => {
    context.commit('addToDo', todoModel);
    setTimeout(() => {
      resolve();
    }, 1500);
  });
}
