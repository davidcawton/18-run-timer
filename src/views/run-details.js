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

    this.$el.append(`
      <li>
        <button class="btn btn-edit">
          <a href="#${this.model.id}/edit"><i class="fa fa-pencil"></i></a>
        </button>
      </li>
      <li>
        <button class="btn btn-newrun">
          <a href=''><i class="fa fa-chevron-circle-left"></i></a>
        </button>
      </li>`);
  },

  template(model) {
    return `
    <p class="run-date">${model.get('date')}</p>
    <p class="run-time">${model.get('time')}</p>
    <p class="run-notes">${model.get('notes')}</p>
    `;
  },
});
