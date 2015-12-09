import Run from './models/run';
import RunCollection from './collections/runs';
import RunForm from './views/run-form';
import RunList from './views/run-list';
import RunDetails from './views/run-details';

var Router = Backbone.Router.extend({
  routes: {
    '': 'runAll',
    new: 'runNew',
    ':id': 'runDetails',
    ':id/edit': 'runEdit',
  },

  initialize() {
    this.runs = new RunCollection();

    this.runs.fetch();
  },

  runAll() {

    var list = new RunList({collection: this.runs});
    $('#outlet').html(list.el);
  },

  runNew() {
    var run = new Run();

    var form = new RunForm({model: run});

    $('#outlet').html(form.el);
  },

  runDetails(runId) {
    var lookupRun = () => {
      var run = this.runs.get(runId);

      if (run) {
        var details = new RunDetails({model: run});

        $('#outlet').html(details.el);
      }
    };

    this.runs.on('sync', lookupRun);

    lookupRun();
  },

  runEdit(runId) {
    var lookupRun = () => {
      var run = this.runs.get(runId);

      if (run) {
        var details = new RunForm({model: run});

        $('#outlet').html(details.el);
      }
    };

    this.runs.on('sync', lookupRun);

    lookupRun();
  },
});

export default Router;
