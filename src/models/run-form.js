export default Backbone.Model.extend({

  urlRoot: 'http://tiny-lr.herokuapp.com/collections/runs-dc',

  defaults: {
    date: '',
    time: '',
    notes: '',
  },
});
