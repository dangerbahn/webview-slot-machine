import Ember from 'ember';
/**
 * @module  components
 * @class   cb-slot-default
 */
export default Ember.Component.extend({
  classNames: ['cbSlotDefault'],
  rows: [1,2,3],
  columns: [1,2,3,4,5],
  items: [1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,4,4,4,5,5,6],
  test: null,
  balance: 500,
  betAmmount: 5,
  click: function () {
    return this.spin();
  },
  touchEnd: function () {
    return this.spin();
  },
  spin: function() {
    this.set('balance', parseInt(this.get('balance')) - parseInt(this.get('betAmmount')));
    var output = [];
    var items = this.get('items');
    var self = this;
    this.get('rows').forEach(function(row) {
      var currentRow = [];
      self.get('columns').forEach(function(row) {
        console.log(Math.floor(Math.random() * (items.length - 1 + 1)) + 1)
        currentRow.push(items[Math.floor(Math.random() * (items.length - 1)) + 1])
      });
      output.push(currentRow);
    });
    this.set('test', Ember.A(output))
  },
  determineWin: function(){
    var state = this.get('test');
    var foundThree = 0;
    state.forEach(function(row) {
      row.forEach(function(item){
        if(item === 6){
          foundThree++;
          if(foundThree === 3){
            return alert('PLAY MINIGAME!');
          }
          
        }
      });
    });
  }.observes('test')
});

