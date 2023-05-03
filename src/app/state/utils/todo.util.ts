import { Todo } from './../../todo/todo.model';

export class TodoUtils {
  public static removeItem(todo: Todo[], id: number) {
    const result = [...todo];
    const itemindex = result.findIndex((i) => i.id === id);
    result.splice(itemindex, 1);
    return result;
  }

  public static checkActiveTodo(todos: Todo[], todo: Todo) {
    let result = [...todos];
    if (!todo.completed) {
      result.push(todo)
      return result
    }
    else {
      result = result.filter((t) => t.id != todo.id)
      return result
    }

  }

  public static checkCompletedTodo(todos: Todo[], todo: Todo) {
    let result = [...todos];
    if (todo.completed) {
      result.push(todo)
      return result
    }
    result = result.filter((t) => t.id != todo.id)
    return result

  }
}
