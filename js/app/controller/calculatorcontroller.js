CalculatorApp.controller('CalculatorController', function($scope, Calculator, CalculatorService) {
	$scope.calculator = Calculator;
	$scope.$watch('calculator.currentButton', function (button) {
		 if(typeof(button.displayValue) !== "undefined"){
			 $scope.calculator.currentButton = {};
			 var eventDetails = CalculatorService.getEventDetails(button, $scope.calculator.data);
			 if(eventDetails.eventName !== "" && eventDetails.eventName !== "undefined"){
				 if(eventDetails.eventName === "setFinalAnswer"){
					 eventDetails = CalculatorService.checkOperatorConditions(button, $scope.calculator.data);
				 }
				 $scope.$broadcast(eventDetails.eventName, eventDetails.data);
			 }
		 }
	});
});