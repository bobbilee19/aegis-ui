import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    linkToNewSponsor(){
      this.transitionToRoute('sponsors.new')
    },

    linkToSponsor(sponsor) {
      this.transitionToRoute('sponsors.sponsor', sponsor);
    }
  }
});
