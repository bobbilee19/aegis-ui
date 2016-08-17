import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('sponsor', params.sponsor_id);
  },

  setupController(controller, sponsor) {
    controller.set('sponsor', sponsor);
  }
});
