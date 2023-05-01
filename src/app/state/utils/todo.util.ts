import { Todo } from './../../todo/todo.model';

export class TodoUtils {
  public static removeItem(items: Todo[], id: number) {
    const result = [...items];
    const itemindex = result.findIndex((i) => i.id === id);
    result.splice(itemindex, 1);
    return result;
  }
}
