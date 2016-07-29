//
// Bulletpad app
//
// Loads local storage if present, saves incoming data as it comes in.
window.onload = function () {
  new Vue({
    el: '#app',
    data: {
      todos: listTodo(),
    },
    methods: {
      addTodo: function () {
        var input = this.newTodo.trim()
        if (input) {
          this.todos.push({ text: input })
          this.newTodo = ''
          localStorage.setItem('lystical', JSON.stringify(this.todos));
        }
      },
      removeTodo: function (index) {
        this.todos.splice(index, 1)
        localStorage.setItem('lystical', JSON.stringify(this.todos));
      },
    }
  });
}

// Load values or provide examples
function listTodo () {
  if (localStorage.getItem("lystical") === null) {
    return [
      {text: 'one'},
      {text: 'two'}
    ];
  }
  else {
    return JSON.parse(localStorage.getItem("lystical"));
  }
}
