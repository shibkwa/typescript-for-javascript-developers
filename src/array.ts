// VScode の型推論で予想されたのを使う
export {}

let numbers: number[] = [1,2,3]

let numbers2: Array<number> = [1,2,3]

let strings2: Array<string> = ['tokyo', 'osaka', 'kyoto']

let strings: string[] = ["typescript", "javascript", "coffeescript"]

let nijigenHairetu: number[][] = [
  [50, 100],
  [150, 300],
]
let hairetsu: (string | number | boolean)[] = [1, false, "Japan"];
