const todos = ["CSS lernen", "JS lernen"];

function listTodos() {
  todos.forEach((i) => {
    console.log(i);
  });
}

function addTodo(todo) {
  if (todo === null || todo === undefined || todo === "") {
    return "Not defined";
  } else {
    todos.push(todo);
    return "Todo added";
  }
}

function deleteTodo(todo) {
  if (todo === null || todo === undefined || todo === "") {
    return "Not defined";
  } else {
    todos.splice(todos.indexOf(todo), 1);
    return "Todo deleted";
  }
}
