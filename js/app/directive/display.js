CalculatorApp.directive('calDisplay', function() {
    return {
    	restrict: 'AEC',
    	template : '<div class="container"><input type="text" class="theme-display" disabled="disabled" readonly="readonly" ng-model="display.currentDisplayValue"></div>'
    };
});