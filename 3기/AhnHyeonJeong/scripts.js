function sum() {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var result = parseFloat(num1) + parseFloat(num2);
  document.getElementById('result').style.display = "block";
  document.getElementById('result').value = num1 + "+" + num2 + "=" + result;
}

function sub() {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var result = parseFloat(num1) - parseFloat(num2);
  document.getElementById('result').style.display = "block";
  document.getElementById('result').value = num1 + "-" + num2 + "=" + result;
}
