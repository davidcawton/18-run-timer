import RunTimer from '../models/run-timer';

export default Backbone.Collection.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/runsdc',

  model: RunTimer,
});
