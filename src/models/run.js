export default Backbone.Model.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/runs-dc',

  idAttribute: '_id',

  defaults: {
    time: '',
    date: '',
    notes: '',
  },
});
