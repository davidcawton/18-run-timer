import Run from '..models/run';

export default Backbone.Collection.extend({
  url: 'http://tiny-lr.herokuapp.com/collections/runs-dc',

  model: Run,
});
