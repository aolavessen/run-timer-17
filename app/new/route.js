import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const url = `http://tiny-tn.herokuapp.com/collections/runs-ao`;
      return fetch(url).then(res => res.json()).then((data) => {

      });
  },
 });
