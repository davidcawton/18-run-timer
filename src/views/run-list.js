export default Backbone.View.extend({
  tagName: 'ul',

  initialize() {
    this.render();

    this.listenTo(this.collection, 'sync', this.render);
  },

  render() {
    this.$el.html(this.template(this.collection));

    this.$el.append(`
      <li class ="btn-li">
        <button class="btn btn-newrun">
          <a href="#new"><i class="fa fa-plus"></i></a>
        </button>
      </li>`);
  },

  template(collection) {
    return collection.map((run) => {
      return `
      <li class="new-run-list">
        <a href="#${run.id}">
          <span class="run-date">${run.get('date')}</span>
          <span class="run-time"> ${run.get('time')}</span>
        </a>
      </li>`;
    });
  },
});
