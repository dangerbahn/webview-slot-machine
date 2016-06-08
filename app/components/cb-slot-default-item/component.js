import Ember from 'ember';
/**
 * @module  components
 * @class   cb-slot-default-item
 */
export default Ember.Component.extend({
  classNames: ['cbSlotDefaultItem'],
  classNameBindings: ['computedItem'],
  computedItem: function(){
    return "item-" + this.get('attrs');
  }.property('attrs')
});
