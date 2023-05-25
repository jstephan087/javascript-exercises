const todos = [
  { description: "CSS lernen", done: false },
  { description: "JS lernen", done: false },
];

function listTodos() {
  todos.forEach((element) =>
    element.done === false
      ? console.log(`[ ] ${element.description}`)
      : console.log(`[X] ${element.description}`)
  );
}

function doneTodo(todo) {
  todos.forEach((element) => {
    if (element.description === todo) {
      element.done = true;
      console.log("Todo done");
    }
  });
}

function showOpenTodos() {
  todos.forEach((element) => {
    if (element.done === false) {
      console.log(`[ ] ${element.description}`);
    }
  });
}

function deleteDoneTodos() {
  todos.forEach((element, index) => {
    if (element.done === true) {
      todos.splice(index, 1);
    }
  });
}
