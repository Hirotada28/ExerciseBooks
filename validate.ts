export const validateIsCorrect = <T>(actual: T, expect: T, id: string): void => {
  if (JSON.stringify(actual) === JSON.stringify(expect)) console.log(`${id}: 正解！`);
  else console.log(`${id}: 不正解...`);
}