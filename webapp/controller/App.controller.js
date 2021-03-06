sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"
], 
function(Controller) {
  "use strict";

  
  return Controller.extend("sap.ui.demo.walkthrough.controller.App", { 
    onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
  });

});