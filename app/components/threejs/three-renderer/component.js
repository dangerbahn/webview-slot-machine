/*global THREE*/
import Ember from 'ember';
/**
 * @module  components
 * @class   three-renderer
 */
export default Ember.Component.extend({
  classNames: ['threeRenderer'],
  rendererElement: function() {
    return this.renderer.domElement;
  }.property('renderer'),
  renderer: function() {
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
  }.on('init')
});
