import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sponsors', function() {
    this.route('new');
    this.route('sponsor', {path: '/:sponsor_id'});
  });
});

export default Router;
