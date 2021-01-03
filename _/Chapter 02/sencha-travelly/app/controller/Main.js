Ext.define('Travelly.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
       refs: {
           myButton: '#myButton'
       },
       control: {
           myButton: {
               tap: 'doMyButtonTap'
           }
       }
    },
    doMyButtonTap: function() {
       alert('My button has been clicked!');
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {

    }
});
