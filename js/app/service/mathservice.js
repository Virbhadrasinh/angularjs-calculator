CalculatorApp.service('MathService', function() {
	this.calculate = function(firstOperand, operator, secondOperand) { 
		var total;
		if(operator === "+"){
			total = firstOperand + secondOperand;
		}else if(operator === "-"){
			total = firstOperand - secondOperand;
		}else if(operator === "/"){
			total = firstOperand / secondOperand;
		}else if(operator === "X"){
			total = firstOperand * secondOperand;
		}
		return total.toFixed(2);
	};
});