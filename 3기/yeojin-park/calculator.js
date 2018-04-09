var inputBox = document.getElementById("inputbox")

inputBox.onkeydown = function(event) {
  var keyID = (event.which) ? event.which : event.keyCode;
  if(( keyID >=48 && keyID <= 57 ) || ( keyID >=96 && keyID <= 105 ) || keyID == 8 || keyID == 189 || keyID == 187 || keyID == 46 || keyID == 37 || keyID == 39){
  }else{
    event.preventDefault();
  }

  if(event.keyCode == 13){
    var inputBoxValue = inputBox.value;
    var output = eval(inputBoxValue);

    if(!isNaN(output)){
      console.log('결과 값은' + output);
      inputBox.value = '';

      var history = document.getElementById("history");
      history.innerHTML += '<li>' + inputBoxValue + '=' + output + '</li>';
      history.scrollTop = history.scrollHeight;
    }else{
      //console.log('계산할 수 없습니다.');
    }
  }
}
