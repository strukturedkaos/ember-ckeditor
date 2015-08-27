/* globals CKEDITOR */
export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
  CKEDITOR.plugins.add( 'placeholder', {
    icons: 'placeholder',
    init: function( editor ) {
      editor.addCommand( 'insertPlaceholder', {
        exec: function( editor ) {
          editor.insertHtml('!!PLACEHOLDER!!');
        }
      });
      
      editor.ui.addButton( 'Placeholder', {
        label: 'Insert Placeholder',
        command: 'insertPlaceholder',
        toolbar: 'insert'
      });
    }
  });
  
  CKEDITOR.config.extraPlugins = 'placeholder';
}

export default {
  name: 'ember-ckeditor-placeholder',
  initialize: initialize
};
