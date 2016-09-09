'use strict';

describe('Controller: JsumainCtrl', function () {

  // load the controller's module
  beforeEach(module('jsuApp'));

  var JsumainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JsumainCtrl = $controller('JsumainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(JsumainCtrl.awesomeThings.length).toBe(3);
  });
});
