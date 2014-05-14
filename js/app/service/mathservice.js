CalculatorApp.service('MathService', function() {
	return {
		calculate : function(firstOperand, operator, secondOperand) { 
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
			if(typeof total === 'number'){
				if(total % 1 === 0){
					return total;
				} else{
					return total.toFixed(2);
				}
			}
		}
	};
});