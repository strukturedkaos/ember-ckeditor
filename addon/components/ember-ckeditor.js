/* globals CKEDITOR */
import Ember from 'ember';
import layout from '../templates/components/ember-ckeditor';

export default Ember.Component.extend({
  layout: layout,
  
  inline: false,
  _editor: null,

  didInsertElement() {
    let initFn = this.get('inline') ? 'inline' : 'replace',
      editor = this._editor = CKEDITOR[initFn](this.get('elementId') + '-editor');
    
    this._editor.targetObject = this;
    
    editor.on('change', (e) => {
      this.set('value', e.editor.getData());
    });
  },

  willDestroyElement() {
    this._editor.destroy();
    this._editor = null;
  }
});
