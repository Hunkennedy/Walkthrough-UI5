sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/core/Fragment"
],
function(Controller, MessageToast, Fragment) {
  "use strict";

  
  return Controller.extend("sap.ui.demo.walkthrough.controller.Panel", {
    onShowHello: function() {      
      //msg from i18n model
      let oBundle = this.getView().getModel("i18n").getResourceBundle();
      let sRecipient = this.getView().getModel().getProperty('/recipient/name'); 
      let sMsg = oBundle.getText('helloMsg', [sRecipient]);
      
      MessageToast.show(sMsg);
    },
    openDialog: function() {
      if (!this.pDialog) {
        this.pDialog = this.loadFragment({
          name: "sap.ui.demo.walkthrough.view.HelloDialog"
        });
      }
      this.pDialog
        .then(function(oDialog) {
          oDialog.open();
        });
    },
    closeDialog: function() {
      this.byId("helloDialog").close();
    }
  })
});