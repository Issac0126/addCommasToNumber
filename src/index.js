export function toLocaleString(num) {
  const text = "test문자001122334455문.자,특수기호##!";

  // 방법 1
  let num = Number(text.replaceAll(/[^0-9]/g, ""));
  let answer = num.toLocaleString('ko-KR');

  // 방법 2
  // let num2 = text.replaceAll(/[^0-9]/g, "");
  // let answer2 = num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return answer;
}
