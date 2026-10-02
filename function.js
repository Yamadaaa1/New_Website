function computeResult() {
    const firstNumber = parseInt(document.getElementById("txtfnum").value);
    const secondNumber = parseInt(document.getElementById("txtSnum").value);
    const result = firstNumber + secondNumber;
    document.getElementById("txtresult").value = result;
    alert("The result is: " + result);
}