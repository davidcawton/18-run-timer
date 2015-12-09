export default Backbone.View.extend({
  tagName: 'form',

  events: {
    submit(ev) {
      ev.preventDefault();

      var time = this.$el.find('#time').val();
      var date = this.$el.find('#date').val();
      var notes = this.$el.find('#notes').val();

      this.model.save({time, date, notes})
      .then(() => {
        Backbone.history.navigate('', {trigger: true});
      });
    },
  },

  initialize() {
    this.render();
  },

  render() {
    this.$el.html(this.template(this.model));
  },

  template(model) {
    return `
    <input type="date" value="${model.get('date')}" id="date" placeholder="Date"></input>
    <input type="time" value="${model.get('time')}" id="time" placeholder="Run Time"></input>
    <input type="text" value="${model.get('notes')}" id="notes" placeholder="Run Notes"></input>
    <button class="btn btn-newrun">
      <a href='#new'><i class="fa fa-plus"></i></a>
    </button>
    `;
  },
});
