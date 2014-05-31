app.service('Tab1Service', ['$rootScope', function($rootScope){
  var serviceData = {
    "menuTitle":"tab1",
    "menuIconClass":"fa fa-calendar-o",
    "pubsubNamespace":"tab1",
    "controlsTemplate":"tab1_controls.html",
    "contentTemplate":"tab1_content.html",
    "contentController":"tab1_content_ctrl.js",
    "controlsController":"tab1_controls_ctrl.js",
    "sharedService":"tab1_service.js",
  };
  return serviceData;
}])
.run(['$rootScope', 'Tab1Service', function ($rootScope,Tab1Service) {
  console.log('angular.copy(Tab1Service)',angular.copy(Tab1Service));
  $rootScope.availableVisualizations['tab1'] = Tab1Service;
  $rootScope.activeVisualizations.push(Tab1Service);
}])