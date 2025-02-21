export function toLocaleString(num) {
  const text = "test문자001122334455문.자,특수기호##!"

  let number = Number(text.replaceAll(/[^0-9]/g, ""))
  let answer = number.toLocaleString('ko-KR')

  return answer;
}
