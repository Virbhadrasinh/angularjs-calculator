CalculatorApp.service('CalculatorService', function(MathService){
	return {
		getEventDetails : function(button, calculatorData){
			var buttonType = button.type;
			if (buttonType === "clear") {
				this.clearCalculatorData(calculatorData);
				return {
					eventName : "clearDisplayValue"
				};
			} else {
				if (buttonType === "number" || (buttonType === "special" && button.actualValue === ".")) {
					return {
						eventName : "changeDisplayValue",
						data : button.displayValue
					};
				} else if (buttonType === "special") {
					return this.ckeckConditions(button, calculatorData);
				}
			}
		},
		ckeckConditions : function(button, calculatorData){
			var operator = button.actualValue;
			var textValue = calculatorData.displayData;
			
			if(textValue === "" || textValue === null || typeof(textValue) === "undefined"){
				alert("Please enter some value");
			}else if(typeof(calculatorData.firstOperand) === "undefined"){
				calculatorData.firstOperand = parseFloat(textValue);
				calculatorData.operator = operator;
				return {
					eventName : "clearDisplayValue"
				};
			}else if(typeof(calculatorData.firstOperand) !== "undefined" && typeof(calculatorData.operator) !== "undefined"){
				calculatorData.secondOperand = parseFloat(textValue);
				calculatorData.total = MathService.calculate(calculatorData.firstOperand, calculatorData.operator, calculatorData.secondOperand);
				return {
					eventName : "setFinalAnswer",
					data : calculatorData.total
				};
			}
		},
		checkOperatorConditions : function(button, calculatorData){
			var operator = button.actualValue;
			if(operator === "+" || operator === "-" || operator === "/" || operator === "X"){
				calculatorData.firstOperand = calculatorData.total;
				calculatorData.operator = operator;
				calculatorData.secondOperand = undefined;
				calculatorData.total = undefined;
				calculatorData.displayData = undefined;
				return {
					eventName : "clearDisplayValue"
				};
			}else if(operator === "="){
				var total = calculatorData.total;
				this.clearCalculatorData(calculatorData);
				return {
					eventName : "setFinalAnswer",
					data : total
				};
			}
		},
		clearCalculatorData : function(calculatorData){
			calculatorData.displayData = undefined;
			calculatorData.firstOperand = undefined;
			calculatorData.operator = undefined;
			calculatorData.secondOperand = undefined;
			calculatorData.total = undefined;
		}
	};
});