CalculatorApp.controller('DisplayController', function($scope, Display) {
	$scope.display = Display;

	$scope.$on('changeDisplayValue', function (scopeDetails, value) {
		if(value === "." && $scope.display.currentDisplayValue.indexOf(".") != -1){
			//do nothing
		}else{
			$scope.display.currentDisplayValue += value;
		}
		$scope.calculator.data.displayData = $scope.display.currentDisplayValue;
    });
	
	$scope.$on('clearDisplayValue', function () {
		$scope.display.currentDisplayValue = "";
		$scope.calculator.data.displayData = $scope.display.currentDisplayValue;
    });
	
	$scope.$on('setFinalAnswer', function (scopeDetails, value) {
		$scope.display.currentDisplayValue = value;
		$scope.calculator.data.displayData = $scope.display.currentDisplayValue;
    });
});