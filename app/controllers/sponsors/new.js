import Ember from 'ember';
import SponsorValidations from 'aegis-ui/validations/sponsor';
import { categories } from 'aegis-ui/utils/constants';

export default Ember.Controller.extend({
  SponsorValidations,
  sponsor: null,
  categories,
  actions: {
    createSponsor(changeset){
      changeset.validate().then(() => {
        if (changeset.get('isValid')) {
          changeset.save().then((sponsor) => {
            this.transitionToRoute('sponsors');
          });
        }
      })
    },
  },
});
