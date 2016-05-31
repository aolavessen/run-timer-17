import Ember from 'ember';

export default Ember.Controller.extend({
  editRun() {
    const attributes = this.model;

    fetch(`https://tiny-tn.herokuapp.com/collections/runs-ao/${attributes._id}`,{
      method: `PUT`,
      headers: {
        Accept: `application/json`,
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(attributes),
    }).then((results) => results.json())
    .then((data) => {
      this.transitionToRoute(`detail`, data._id)
    });
  },
});
