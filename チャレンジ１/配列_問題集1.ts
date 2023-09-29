namespace array_problems1 {
  
  const validIsCorrect = <T>(actual: T, expect: T, id: string): void => {
    if (JSON.stringify(actual) === JSON.stringify(expect)) console.log(`${id}: 正解！`);
    else console.log(`${id}: 不正解...`);
  }

  // 問題1
  // 1から100までの数字が格納された配列の作成をして下さい。
  const answer1: number[] = new Array(100).fill(0).map((_, i) => i+1);
  validIsCorrect(
    answer1,
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
    '問題1'
  );
  
  // 問題2
  // 次の連想配列(images)のheightだけを取得し、新しい配列(heights)を作成して下さい。
  ​type Images = {
    height: string;
    width: string;
  }[];
  
  const images: Images = [
    { height: "20px", width: "40px" },
    { height: "34px", width: "56px" },
    { height: "28px", width: "64px" },
  ];
  
  const answer2: string[] = ;
  validIsCorrect(answer2, ["20px", "34px", "28px"], '問題2');
  
  // 問題3
  // 次の連想配列(member)の中から名前(name)の値だけを抜き取った配列が返るような関数を作成して下さい
  ​type Members1 = {
    name: string;
    age: number;
    gender: "male" | "female";
  }[];
    
  const members1: Members1 = [
    { name: "松井", age: 39, gender: "male" },
    { name: "今田", age: 34, gender: "female" },
    { name: "鈴木", age: 24, gender: "male" },
    { name: "山田", age: 56, gender: "male" },
    { name: "田中", age: 89, gender: "female" },
  ];
  
  const answer3 = (): string[] => {};
  validIsCorrect(answer3(), ["松井", "今田", "鈴木", "山田", "田中"], '問題3');
  
  // 問題4
  // 以下の連想配列(users)の中から、管理者権限(admin)を持っている(true)ユーザーに絞り込み、変数に格納して下さい。
  ​type Users1 = {
      id: number;
      admin: Boolean;
  }[];
    
  const users1: Users1 = [
    { id: 1, admin: true },
    { id: 2, admin: true },
    { id: 3, admin: false },
    { id: 4, admin: true },
    { id: 5, admin: false },
  ];
  
  const answer4: Users1 = ;
  validIsCorrect(answer4, [{ id: 1, admin: true },{ id: 2, admin: true },{ id: 4, admin: true }], '問題4');
  
  // 問題5
  // 次の多次元配列のインデックス0番目のみを取り出した配列を作成して下さい。
  ​const array1 = [
    ["Ruffy", "captain"],
    ["Zoro", "combatant"],
  ];
  
  const answer5: string[] = ;
  validIsCorrect(answer5, ["Ruffy", "Zoro"], '問題5');
  
  // 問題6
  // 次の多次元配列の0番目の配列のみを取り出し新しい配列に作成して下さい。
  ​const array2 = [
    ["Ruffy", "captain"],
    ["Zoro", "combatant"],
  ];
  
  const answer6: string[][] = ;
  validIsCorrect(answer6, [["Ruffy", "captain"]], '問題6');
  
  // 問題7
  // 次の連想配列(member)の中から35歳以上の名前(name)の値だけを抜き取った配列が返るような関数を作成して下さい。
  ​type Members2 = {
    name: string;
    age: number;
    gender: "male" | "female";
  }[];
    
  const members2: Members2 = [
    { name: "松井", age: 39, gender: "male" },
    { name: "今田", age: 34, gender: "female" },
    { name: "鈴木", age: 24, gender: "male" },
    { name: "山田", age: 56, gender: "male" },
    { name: "田中", age: 89, gender: "female" },
  ];
  
  const answer7 = (): string[] => {};
  validIsCorrect(answer7(), ["松井", "山田", "田中"], '問題7');
  
  // 問題8
  // 以下のような重複値を含む配列arrの中から、重複値を除いた昇順の配列を作成して下さい。
  const nums = [2, 4, 7, 5, 4];
  
  const answer8: number[] = ;
  validIsCorrect(answer8, [2, 4, 5, 7], '問題8');
  
  // 問題9
  // 次の連想配列の中からnameプロパティをもったユーザーに絞り込み、変数に格納して下さい。
  ​interface User2 {
    id: number;
    name?: string;
  }
    
  const users2: User2[] = [
    { id: 1, name: "豊臣" },
    { id: 2 },
    { id: 3, name: "織田" },
  ];
  const answer9: User2[] = ;
  validIsCorrect(answer9, [{ id: 1, name: "豊臣" },{ id: 3, name: "織田" }], '問題9');
  
  // 問題10
  // 以下の連想配列(users)の中から、管理者権限(admin)を持っている(true)ユーザーを探し、最初に見つけた(true)ユーザーを変数に格納して下さい。
  ​type Users3 = {
    id: number;
    admin: Boolean;
  }[];
    
  const users3: Users3 = [
    { id: 1, admin: false },
    { id: 2, admin: true },
    { id: 3, admin: false },
    { id: 4, admin: true },  
  ];
  
  const answer10 = ;
  validIsCorrect(answer10, { id: 2, admin: true }, '問題10');
  
  // 問題11
  // 次の連想配列(member)の中から,女性の田中さんのオブジェクトを抽出する関数を作成しなさい。
  ​type Members3 = {
    name: string;
    age: number;
    gender: "male" | "female";
  };
    
  const members3: Members3[] = [
    { name: "田中", age: 44, gender: "male" },
    { name: "松井", age: 39, gender: "male" },
    { name: "今田", age: 34, gender: "female" },
    { name: "鈴木", age: 24, gender: "male" },
    { name: "山田", age: 56, gender: "male" },
    { name: "田中", age: 89, gender: "female" },
  ];
  
  const answer11 = (): Members3 => {}
  validIsCorrect(answer11(), [{ name: "田中", age: 89, gender: "female" }], '問題11');
  
  
  // 問題12
  // アンケートを実施した結果がusersという連想配列に格納されています。ユーザー全員が回答済みかどうかを確認し、変数に結果(trueかfalse)を示して下さい。
  ​type Users4 = {
    id: number;
    hasSubmitted: boolean;
  }[];
    
  const users4: Users4 = [
    { id: 2, hasSubmitted: true },
    { id: 3, hasSubmitted: false },
    { id: 4, hasSubmitted: true },
  ];
  
  const answer12: boolean = ;
  validIsCorrect(answer12, false, '問題12');
}