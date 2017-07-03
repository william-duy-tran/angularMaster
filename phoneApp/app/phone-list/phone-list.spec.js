/**
 * Created by willo on 7/2/17.
 */
describe('PhoneListController', function(){
	beforeEach(module('phoneList'));
	
	var $httpBackend, ctrl;
	beforeEach(inject(function($componentController, _$httpBackend_){
		$httpBackend = _$httpBackend_;
		$httpBackend.expectGET("phones/phones.json").respond([{name:"nexus"},{name:"motorola"}]);
		ctrl = $componentController('phoneList');
	}));
	
	it('show create a `phones` module with 3 phones', function(){
		expect(ctrl.phones).toBeUndefined();
		$httpBackend.flush();
		expect(ctrl.phones).toEqual([{name:"nexus"},{name:"motorola"}]);
	});
	it('should create a default sort prop model', function() {
		var ctrl = $componentController('phoneList');
		expect(ctrl.orderProp).toBe("age");
	});
});
