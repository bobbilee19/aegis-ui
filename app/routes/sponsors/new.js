import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('sponsor');
  },
  setupController(controller, sponsor){
    controller.set('sponsor', sponsor);
  },
});
