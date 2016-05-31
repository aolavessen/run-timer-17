import Ember from 'ember';

export default Ember.Route.extend({
  model(url) {
  return fetch(`http://tiny-tn.herokuapp.com/collections/runs-ao/${url._id}`)
  .then(resp => resp.json());
},
});
