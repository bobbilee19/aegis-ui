import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('sponsor');
  },
  setupController(controller,sponsor){
    controller.set('sponsors',sponsor);
  }
});
