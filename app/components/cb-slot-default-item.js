import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['item'],
  classNameBindings: ['computedItem'],
  computedItem: function(){
    return "item-" + this.get('item');
  }.property('item')
});
