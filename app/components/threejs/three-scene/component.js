/*global THREE*/
import Ember from 'ember';
/**
 * @module  components
 * @class   three-scene
 */
export default Ember.Component.extend({
  classNames: ['threeScene'],
  test: function() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( this.renderer.domElement );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0xea611d } );
    var cube = new THREE.Mesh( geometry, material );
    var light = new THREE.AmbientLight( 0x404040 ); // soft white light

this.scene.add( cube );
    this.scene.add( light );
    

    this.camera.position.z = 5;
    var self = this;
    var render = function() {
      cube.rotation.x += 0.1;
      cube.rotation.y += 0.1;
      
      requestAnimationFrame( render );
      self.renderer.render( self.scene, self.camera );
    }
    render();
  }.on('didInsertElement')
});
