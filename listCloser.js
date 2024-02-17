export const todoListCloser = (function () {
  let todoList = [];

  return {
    getTodoList() {
      return todoList;
    },

    addTodoList(todo) {
      return todoList.unshift(todo);
    },

    updateTodoState(todoId) {
      todoList.forEach((todo) => {
        if (String(todo.id) === todoId) {
          todo.state = todo.state;
        }
      });
    },

    deleteTodoList(todoId) {
      todoList = todoList.filter((todo) => String(todo.id) !== todoId);
      return todoList;
    },
  };
})();
