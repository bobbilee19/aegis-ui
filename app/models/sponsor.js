import DS from 'ember-data';

const { attr, Model } = DS;

export default Model.extend({
  name: attr('string'),
  website: attr('string'),
  industry: attr('string'),
  category: attr('string'),
  location: attr('string'),
  createdAt: attr('date'),
});
