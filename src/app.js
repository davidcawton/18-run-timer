import RunRouter from './router';

export default function() {
  var route = new RunRouter();

  Backbone.history.start();
}
