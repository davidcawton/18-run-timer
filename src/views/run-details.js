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
      <ul class="detail-btns">
        <li class="detail-btn">
        <button class="btn btn-newrun">
          <a href=''><i class="fa fa-chevron-circle-left"></i></a>
        </button>
        </li>
        <li class="detail-btn">
          <button class="btn btn-edit">
            <a href="#${this.model.id}/edit"><i class="fa fa-pencil-square"></i></a>
          </button>
        </li>
      </ul>
      `);
  },

  template(model) {
    return `
    <ul class="details-list">
      <li class="run-date details-info det-info-title">Date: </li>
      <li class="run-date details-info"> ${model.get('date')}</li>
    </ul>
    <ul class="details-list">
      <li class="run-time details-info det-info-title">Time: </li>
      <li class="run-time details-info"> ${model.get('time')}</li>
    </ul>
    <ul class="details-list">
      <li class="run-notes details-info det-info-title">Notes: </li>
      <li class="run-notes details-info"> ${model.get('notes')}</li>
    </ul>
    `;
  },
});
