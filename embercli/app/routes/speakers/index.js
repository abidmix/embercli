export default Ember.Route.extend({
  model: function() {
	 return this.store.findAll('speaker');
     
  },
   renderTemplate: function() {
    this.render({
      outlet: 'master',
    });
   },
   setupController:function(controller,model){
	   controller.set('speakers',model);
   }
});
