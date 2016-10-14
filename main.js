//
// Bulletpad app
//
// Loads local storage if present, saves incoming data as it comes in.
window.onload = () => {
  new Vue({
    el: '#app',
    data() {
      if (localStorage.getItem("lystical") === null) {
        return { todos: [
          {text: 'one'},
          {text: 'two'}
        ]};
      }
      else {
        return { todos: JSON.parse(localStorage.getItem("lystical")) };
      }
    },
    methods: {
      addTodo() {
        let input = this.newTodo.trim()
        if (input) {
          this.todos.push({ text: input })
          this.newTodo = ''
          localStorage.setItem('lystical', JSON.stringify(this.todos));
        }
      },
      removeTodo(index) {
        this.todos.splice(index, 1)
        localStorage.setItem('lystical', JSON.stringify(this.todos));
      },
    }
  });
}
