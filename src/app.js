import Router from './router';

export default function() {
  var router = new Router();

  Backbone.history.start();
}
