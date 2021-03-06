/* globals CKEDITOR */
import Ember from 'ember';
import layout from '../templates/components/ember-ckeditor';

export default Ember.Component.extend({
  layout: layout,
  
  inline: false,
  _editor: null,
  
  extraPlugins: '',
  
  _settings: Ember.computed(
    'extraPlugins',
  {
    get(){
      let that = this,
        settings = that.getProperties([
          'extraPlugins'
        ]);
      
      return settings;
    }
  }),

  didInsertElement() {
    let initFn = this.get('inline') ? 'inline' : 'replace',
      editor = this._editor = CKEDITOR[initFn](this.get('elementId') + '-editor', this.get('_settings'));
    
    this._editor.targetObject = this;
    
    editor.on('change', (e) => {
      this.set('value', e.editor.getData());
    });
    
    if(this.attrs.blur) {
      editor.on('blur', (e) => {
        if(!e.editor.getData()) {
          e.editor.element.addClass('cke_empty');
        } else {
          e.editor.element.removeClass('cke_empty');
        }
        
        this.attrs.blur();
      });
    }
    
    editor.on('instanceReady', (e) => {
      if(!e.editor.getData()) {
        e.editor.element.addClass('cke_empty');
      } else {
        e.editor.element.removeClass('cke_empty');
      }
    });
  },

  willDestroyElement() {
    this._editor.destroy();
    this._editor = null;
  }
});
