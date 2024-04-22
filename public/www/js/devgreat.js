// html 을 제어하므로
window.addEventListener("load", function () {
  // html에 내용 출력하기
  function makeHtml(_result) {
    // 화살표 함수 연습
    function say(_who) {
      console.log("안녕", _who, this);
    }
  }
  const sayArrow = (_who) => {
    console.log("안녕", _who, this);
  };
  // this 의 차이
  const btWrap = document.querySelector(".bt-wrap");
  btWrap.addEventListener("click", function () {
    console.log(this);
  });
  btWrap.addEventListener("click", () => {
    console.log(this);
  });
  //할일
  const dataUrl = "./apis/crew.json";
  fetch(dataUrl)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((_who) => {
      console.log(say);
      console.log(sayArrow);
    })
    .catch((error) => {
      console.log(error);
    });
});
