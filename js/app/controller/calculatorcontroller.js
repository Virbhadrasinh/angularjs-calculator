CalculatorApp.controller('CalculatorController', function($scope, CalculatorService) {
	$scope.calculatorModel = window.calculator;
	$scope.$watch('calculatorModel.currentButton', function (button) {
		 if(typeof(button.displayValue) !== "undefined"){
			 $scope.calculatorModel.currentButton = {};
			 var eventDetails = CalculatorService.getEventDetails(button, $scope.calculatorModel.data);
			 if(eventDetails.eventName !== "" && eventDetails.eventName !== "undefined"){
				 if(eventDetails.eventName === "setFinalAnswer"){
					 eventDetails = CalculatorService.checkOperatorConditions(button, $scope.calculatorModel.data);
				 }
				 $scope.$broadcast(eventDetails.eventName, eventDetails.data);
			 }
		 }
	});
});