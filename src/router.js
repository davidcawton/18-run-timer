import RunlogList from '/..collections/runlog-list';
import RunIndex from '/..views/posts';

var Router = Backbone.Router.extend({
  routes: {
    '': 'allRuns',
    new: 'newRuns',
    ':id': 'runsDetail',
    ':id/edit': 'editRuns',
  },
  posts: null,

  initialize() {
    this.posts = new RunlogList();
    this.posts.fetch();
  },

  allRuns() {
    var runsIndex = new RunIndex({collection: this.posts});
  },
});
export default Router;
