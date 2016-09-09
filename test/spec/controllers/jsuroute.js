'use strict';

describe('Controller: JsurouteCtrl', function () {

  // load the controller's module
  beforeEach(module('jsuApp'));

  var JsurouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JsurouteCtrl = $controller('JsurouteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(JsurouteCtrl.awesomeThings.length).toBe(3);
  });
});
