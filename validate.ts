export const validateIsCorrect = <T>(actual: T, expect: T, id: string): void => {
    console.log('あなたの解答');
    console.log(actual);
  if (JSON.stringify(actual) === JSON.stringify(expect)) console.log(`${id}: 正解！`);
  else console.log(`${id}: 不正解...`);
}