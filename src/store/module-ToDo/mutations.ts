import ToDoModel from 'src/models/ToDoModel';

export function setMyProp(state: any, value: string) {
  state.myProp = value;
}
export function addToDo(state: any, toDoModel: ToDoModel) {
  state.todos.push(toDoModel);
}
