import RunRouter from './router';

export default function() {
  var r = new RunRouter();

  Backbone.history.start();
}
