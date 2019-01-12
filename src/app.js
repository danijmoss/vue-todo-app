var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    todo: null,
    todos: []
  },
  methods: {
    add(todo) {
      if (!this.todoIsValid) {
        return;
      }

      this.todos.push({
        content: todo,
        finished: false
      });

      this.todo = null;
    },
    remove(todo) {
      this.todos = this.todos.filter(item => item !== todo);
    }
  },
  computed: {
    todoIsValid() {
      return !!this.todo;
    }
  }
});
