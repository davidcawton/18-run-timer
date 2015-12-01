export default Backbone.Model.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/runsdc',

  defaults: {
    time: '',
    date: '',
    notes: '',
  },
});
