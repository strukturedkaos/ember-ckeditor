import Ember from 'ember';

export default Ember.Controller.extend({
  text: "<h1>Welcome to ember-ckeditor</h1> <p>This <strong>whole page</strong> is <s>partially</s>&nbsp;<strong>mostly</strong> editable. It uses the CKEditor inline mode.</p> <p>Lists <em>are</em> supported.</p> <ol> <li>Item 1</li> <li>Item 2</li> <li>Item 3</li> </ol> <ul> <li>Thing 1</li> <li>Thing 2</li> <li>Thing 3</li> </ul> <p>Blockquotes:</p> <blockquote> <p>This is a block quote.</p> </blockquote>",
  
  text2: "<h1>Welcome to ember-ckeditor</h1> <p>This editor uses the CKEditor non-inline mode.</p>",

  actions: {
    updateValue(newValue) {
      this.set('text', newValue);
    }
  }
});
