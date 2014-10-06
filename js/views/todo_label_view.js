Todos.TodoLabelView = Ember.View.extend({
    keyPress: function(ev) { 
      if (ev.keyCode === 13) {
        this.get("controller").send("editTodo");
      }
    },
    doubleClick: function() {
      this.get("controller").send("editTodo");
    }
});
