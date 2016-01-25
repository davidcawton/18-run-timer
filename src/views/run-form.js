export default Backbone.View.extend({
  tagName: 'form',

  events: {
    submit(ev) {
      ev.preventDefault();

      var time = this.$el.find('.run-time').val();
      var date = this.$el.find('.run-date').val();
      var notes = this.$el.find('.run-notes').val();

      this.model.save({time, date, notes})
      .then(() => {
        Backbone.history.navigate('', {trigger: true});

        this.collection.add(this.model);
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
    <input type="date" value="${model.get('date')}" class="run-date form-inputs" placeholder="Date"></input>
    <input type="time" value="${model.get('time')}" class="run-time form-inputs" placeholder="Run Time"></input>
    <input type="message" value="${model.get('notes')}" class="run-notes form-inputs" placeholder="Run Notes"></input>

    <button class="btn btn-addrun"><i class="fa fa-plus-circle"></i></button>
    `;
  },
});
