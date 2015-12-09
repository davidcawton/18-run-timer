export default Backbone.View.extend({
  initialize() {
    this.render();
  },

  events: {
    'click .delete-btn'() {
      this.model.destroy().then(() => {
        Backbone.history.navigate('', {trigger: true});
      });
    },
  },

  render() {
    this.$el.html(this.template(this.model));
  },

  template(model) {
    return `
    <p>${model.get('date')}</p>
    <p>${model.get('time')}</p>
    <p>${model.get('notes')}</p>

    <button><a href="#${model.id}/edit">Edit</a></button>
    `;
  },
});
