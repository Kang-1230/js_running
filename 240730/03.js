function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 Complete");
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 Complete");
    }, 2000);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3 Complete");
    }, 3000);
  });
}

async function runTasksSequential() {
  console.time("Sequential");
  try {
    const result1 = await task1();
    console.log(result1);
    const result2 = await task2();
    console.log(result2);
    const result3 = await task3();
    console.log(result3);
  } catch (error) {
    console.error("Error:", error);
  }
  console.timeEnd("Sequential");

  // 예상되는 대략적인 시간과 그 이유 < 6초, task1,2,3이 순차적으로 진행되기 때문 >
}

async function runTasksParallel() {
  console.time("Parallel");
  try {
    const results = await Promise.all([taskl()], [task2()], [task3()]);
    results.forEach((result) => console.log(result));
  } catch (error) {
    console.error("Error:", error);
  }
  console.timeEnd("Parallel");
  // 예상되는 대략적인 시간과 그 이유 < 3초, 병렬적으로 실행되기 때문에 가장 늦은 함수가 끝날 때 끝난다.  >
}

// 함수 호출
runTasksSequential().then(() => runTasksParallel());
