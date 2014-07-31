Todos.EditTodoView = Ember.TextField.extend({
    didInsertElement: function() {
        this.$().focus();
    },
    keyPress: function(ev) { 
      if (ev.keyCode === 13) {
        this.$().blur();
      }
    },

});

Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);
