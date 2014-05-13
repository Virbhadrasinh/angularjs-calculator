CalculatorApp.controller('DisplayController', function($scope) {
	$scope.display = window.display;

	$scope.$on('changeDisplayValue', function (scopeDetails, value) {
		if(value === "." && this.display.currentDisplayValue.indexOf(".") != -1){
			//do nothing
		}else{
			this.display.currentDisplayValue += value;
		}
		$scope.calculatorModel.data.displayData = this.display.currentDisplayValue;
    });
	
	$scope.$on('clearDisplayValue', function () {
		this.display.currentDisplayValue = "";
		$scope.calculatorModel.data.displayData = this.display.currentDisplayValue;
    });
	
	$scope.$on('setFinalAnswer', function (scopeDetails, value) {
		this.display.currentDisplayValue = value;
		$scope.calculatorModel.data.displayData = this.display.currentDisplayValue;
    });
});