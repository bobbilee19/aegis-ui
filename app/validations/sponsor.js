import {
  validatePresence,
  validateLength,
  validateConfirmation,
  validateFormat
} from 'ember-changeset-validations/validators';
export default {
  name: validatePresence(true),
  website: validatePresence(true),
  industry: validatePresence(true),
  category: validatePresence(true),
  location: validatePresence(true)
};
