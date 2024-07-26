//해당 문제를 forEach로 변경하여 풀어주세요
// 1.
let arr1 = [10, 20, 30];

let tenfold = [];
arr1.forEach(function (n) {
  tenfold.push(n * 10);
});

console.log(tenfold);
// 해당 로직을 작성하세요

// 결과 값: [100, 200, 300] 출력해주세요

// 2.
let arr2 = [10, 22, 33];

let fivefold = [];
arr2.forEach(function (n) {
  if (n % 5 === 0) {
    fivefold.push(n);
  }
});

console.log(fivefold);

//map,filter는 새로운 배열을 반환하지만, forEach는 주어진 함수를 배열의 각 요소에 대해 실행하기 때문에 map,filter가 작동하지 않는다...
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요

// 결과값 [10]
