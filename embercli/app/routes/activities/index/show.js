export default Ember.Route.extend({
  
   beforeModel: function(transition) {
      //alert("Sorry, you need a time machine to enter this route.");
      //transition.abort();
    },
   model: function(params) {
	  
    var activity=this.store.findRecord('activity', params.id);
	 
	return activity;
  },
  setUpController:function(controller,model)
  {
	   controller.set('model',model);
	  
  }
 
  
});