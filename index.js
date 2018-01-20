var inputEl = document.querySelector('.ui-input'),
    resultEl = document.querySelector('.ui-result span'),
    addBtn = document.querySelector('.add'),
    subBtn = document.querySelector('.sub'),
    multiBtn = document.querySelector('.multi'),
    divBtn = document.querySelector('.div'),
    equalBtn = document.querySelector('.equal'),
    resetBtn = document.querySelector('.reset'),
    calculateFn,
    resultVal,
    currentVal,
    inputVal = '';

function wrapFn(fn){
  return function(a){
    return function(b){
      return fn(a, b);
    }
  }
}

// 덧셈을 수행하는 함수
var add = wrapFn(function(a, b){
  return a + b;
});

// 뺄셈을 수행하는 함수
var sub = wrapFn(function(a, b){
  return a - b;
});

// 곱셈을 수행하는 함수
var multi = wrapFn(function(a, b){
  return a * b;
});

// 나눗셈을 수행하는 함수
var division = wrapFn(function(a, b){
  return a / b;
});

// 연산을 수행하는 함수
function calculation(inputNum, fn){
  var operatorStr = this.innerText;

  if(inputVal.length){
    if(!calculateFn && typeof fn === 'function'){
      calculateFn = fn(inputNum);
    }else{
      resultVal = calculateFn(inputNum);
      if(typeof fn === 'function') calculateFn = fn(resultVal);
    }
    console.log('result', resultVal);

    if(arguments.length > 1){
      resultEl.innerText += operatorStr;
    }else{
      resultEl.innerHTML += operatorStr + "<br />";
      resultEl.innerHTML += resultVal;
    }

    inputEl.value = '';
    inputEl.focus();

    return resultVal;
  }
}

// 숫자만 입력
function onlyNumber(event){
	event = event || window.event;
	var keyID = (event.which) ? event.which : event.keyCode;

	if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ){
		return true;
	}else{
  	return false;
  }
}

window.addEventListener('DOMContentLoaded', function(){

  console.log('loaded');

  inputEl.focus();

  // 키보드 입력
  inputEl.addEventListener('keyup', function(e){
    var resultStr = resultEl.innerText;
    var key = parseInt(e.keyCode, 10);

    if(key === 8){
      // 백스페이스키가 들어오면 화면에서 글자의 마지막 문자를 지움
      if(resultStr.length == 0) return false;
      var sliceStr = resultStr.slice(0, -1);
      resultEl.innerText = sliceStr;
      console.log('resultStr2', resultEl.innerText);
    }else{
      // 키보드 입력을 화면에 표시
      if(onlyNumber(e)){
        var tempArr = [].slice.call(inputEl.value);
        var lastVal = tempArr.pop();
        console.log('tempArr', tempArr);
        resultEl.innerText += lastVal;
      }
    }
    inputVal = this.value;
  });

  // 덧셈버튼을 클릭하면 덧셈 실행
  addBtn.addEventListener('click', function(){
    var inputNum = parseInt(inputVal);
    currentVal = calculation.call(this, inputNum, add);
    console.log('결과', currentVal);
  });

  // 뺄셈버튼을 클릭하면 뺄셈 실행
  subBtn.addEventListener('click', function(){
    var inputNum = parseInt(inputVal);
    currentVal = calculation.call(this, inputNum, sub);
    console.log('결과', currentVal);
  });

  // 곱셈버튼을 클릭하면 곱셈을 실행
  multiBtn.addEventListener('click', function(){
    var inputNum = parseInt(inputVal);
    currentVal = calculation.call(this, inputNum, multi);
    console.log('결과', currentVal);
  });

  // 나눗셈버튼을 클릭하면 나눗셈을 실행
  divBtn.addEventListener('click', function(){
    var inputNum = parseInt(inputVal);
    currentVal = calculation.call(this, inputNum, division);
    console.log('결과', currentVal);
  });

  // 연산 결과를 보여줌
  equalBtn.addEventListener('click', function(){
    var inputNum = parseInt(inputVal);
    currentVal = calculation.call(this, inputNum);
    console.log('결과', currentVal);
  });

  // 리셋버튼을 클릭하면 화면에서 지움
  resetBtn.addEventListener('click', function(){
    resultEl.innerHTML = '';
    inputEl.value = '';
    calculateFn = '';
    inputEl.focus();
  })

})
