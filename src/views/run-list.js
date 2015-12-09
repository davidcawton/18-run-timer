export default Backbone.View.extend({
  tagName: 'ul',

  initialize() {
    this.render();

    this.listenTo(this.collection, 'sync', this.render);
  },

  render() {
    this.$el.html(this.template(this.collection));
  },

  template(collection) {
    return this.collection.map((run) => {
      return `
      <li>${run.get('date')}
      ${run.get('time')}</li>
      <a href="#${run.id}"><i class="fa fa-plus"></a></li>`;
    });
  },
});
