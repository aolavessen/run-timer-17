import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('new');
  this.route('detail', { path: `/:_id` });
  this.route('run-edit');
});

export default Router;
