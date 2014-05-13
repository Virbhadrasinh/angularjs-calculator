CalculatorApp.controller('ButtonController', function($scope) {
	$scope.buttons = window.buttons;
	$scope.buttonClicked = function(button) {
		$scope.calculatorModel.currentButton = button;
	}
});