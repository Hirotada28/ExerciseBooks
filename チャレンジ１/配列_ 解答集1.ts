// 配列_問題集1の解答集
namespace array_answers1{

// 問題1
const answer1: number[] = Array.from({length: 100}, (_, i) => i+1);
const otherAns1: number[] = [...new Array(100).keys()].map((v) => v+1);
const otherAns1_2: number[] = new Array(100).fill(0).map((_, i) => i+1);

// 問題2
const answer2: string[] = images.map(({height}) => height); // 分割代入の利用
const otherAns2: string[] = images.map((v) => v.height);
const otherAns2_2: string[] = images.reduce<string[]>((pre, curr) => {
  return [...pre, curr.height]
}, []);;

// 問題3
const answer3 = (): string[] => {
  return members1.map(({name}) => name);
};

// 問題4
const answer4: Users1 = users1.filter(({admin}) => admin);

// 問題5
const answer5: string[] = array1.map((v) => v[0]);

// 問題6
const answer6: string[][] = array2.filter((_, i) => i === 0);
const otherAns6: string[][] = array2.map((v, i) => i === 0 ? v : undefined).filter((v) => !!v);

// 問題7
const answer7: string[] = members2.filter(({age}) => age >= 35).map(({name}) => name);

// 問題8
const answer8: number[] = [...new Set(nums)].sort();
const otherAns8: number[] = nums.filter((v, i, arr) => nums.indexOf(v) === i).sort((a, b) => a - b);

// 問題9
const answer9: User2[] = users2.filter(({name}) => !!name);

// 問題10
const answer10 = users3.find(({admin}) => admin) ?? {} as Users3;

// 問題11
const answer11 = (): Members3 => {
    return members3.find(({name, gender}) => name === '田中' && gender === 'female') ?? {} as Members3;
  }

// 問題12
const answer12: boolean = users4.every(({hasSubmitted}) => hasSubmitted);
const otherAns12: boolean = !users4.some(({hasSubmitted}) => !hasSubmitted);
}