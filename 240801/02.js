// 1. 출력값과 출력되는 값의 이유를 설명해주세요

var name = "yuno";

function myName() {
  var name = "yuno2";
  function a() {
    console.log(name);
  }
  return a();
}

myName(); //yuno2. myName 함수는 a함수를 출력하도록 되어 있는데, a함수는 console.log(name) 이라 console.log("yuno2")가 된다.

// 2. 출력값과 출력되는 값의 이유를 설명해주세요

function test() {
  var x = 1;

  if (true) {
    var x = 2;
  }

  console.log(x);
}

test(); //2 : if (true)는 항상 참이기 때문에 var x = 2;가 출력된다. if는 함수 스코프를 따르기 때문에 var가 탈출하고 var는 재할당되기 때문에 var x =2의 값이 console.log(x)로 출력된다.

// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.

const nameObj = {
  name: "yuno",
  method: function () {
    const arrow = () => {
      console.log(`화살표 함수 : ${this.name}`);
    };
    function normal() {
      console.log(`일반 함수 : ${this.name}`);
    }
    arrow();
    normal();
  },
};

nameObj.method(); //화살표 함수 : yuno -> 화살표 함수는 this를 화살표 함수가 선언된 위치의 'this'값을 그대로 사용하기 때문에 yuno가 출력된다.
//일반 함수 : undefined -> 일반 함수는 어디에 있든 전역 객체를 참조하기 때문에.
