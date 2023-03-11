function calculate() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var operator = document.getElementById("operator").value;
	var result = document.getElementById("result");

	if (isNaN(num1) || isNaN(num2)) {
		result.innerHTML = "Please enter valid numbers";
		return;
	}

	if (operator == "+") {
		result.innerHTML = num1 + num2;
	} else if (operator == "-") {
		result.innerHTML = num1 - num2;
	} else if (operator == "*") {
		result.innerHTML = num1 * num2;
	} else if (operator == "/") {
		result.innerHTML = num1 / num2;
	} else {
		result.innerHTML = "";
		return null;
	}
}