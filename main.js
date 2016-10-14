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
        const input = this.newTodo.trim()
        if (input) {
          this.todos.push({ text: input })
          this.newTodo = ''
          localStorage.setItem('lystical', JSON.stringify(this.todos));
        }
      },
      removeTodo(index) {
        const item = this.todos.length - 1 - index;
        if (confirm(`Delete this?\n${this.todos[item].text}`) == true) {
          this.todos.splice(item, 1)
          localStorage.setItem('lystical', JSON.stringify(this.todos));
        }
      },
    },
    filters: {
      reverse(value) {
        return value.slice().reverse();
      }
    }
  });
}
