// npm run dev src/boolean.ts
export {}
let name = 'TypeScript' // export{}コメントアウトするとモジュールとグローバル変数のnameが被ってエラー

let isFinished: boolean = true
isFinished = false;
isFinished = 1 //  ダメな例 Type 'number' is not assignable to type 'boolean'.（boolean以外は代入不可）
console.log({ isFinished });
