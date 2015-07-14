export default Ember.Route.extend({
   
  model: function(params) {
	 return this.store.findAll('activity');
     
  },
   renderTemplate: function() {
    this.render({
      outlet: 'master',
    });
   }
   
});
