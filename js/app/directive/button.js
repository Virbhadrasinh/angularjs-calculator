CalculatorApp.directive('calButton', function() {
    return {
    	restrict: 'AEC',
    	template : '<div class="container"><div class="theme-button" ng-repeat="button in buttons" ng-click="buttonClicked(this.button)">{{button.displayValue}}</div></div>'
    };
});