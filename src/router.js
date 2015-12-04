var Router = Backbone.Router.extend({
  routes: {
   '': 'listAllRuns',
   new: 'newRun',
   ':id': 'runDetails',
   ':id/edit': 'editRun',
 },
});

export default Router;
