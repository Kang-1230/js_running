// async await 를 사용한 코드로 변경해보기

const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === API_URL) {
        resolve("성공");
      } else {
        reject("실패");
      }
    }, 3000);
  });
}

async function newData(url) {
  try {
    const response = await getData(url);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

newData(API_URL); // 성공
newData(WRONG_URL); // 실패
