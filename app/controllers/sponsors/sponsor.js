import Ember from 'ember';
import { categories } from 'aegis-ui/utils/constants';
export default Ember.Controller.extend({
  isEditing: false,

  categories,

  actions: {
    toggleIsEditing() {
      this.toggleProperty('isEditing');
    },

    deleteSponsor(changeset){
      changeset.destroyRecord().then((sponsor) => {
        this.transitionToRoute('sponsors');
      });
    },

    saveChanges(changeset){
      changeset.validate().then(() => {
        if (changeset.get('isValid')) {
          changeset.save().then((sponsor) => {
            this.set('isEditing', false);
          });
        }
      })
    },
  },
});
