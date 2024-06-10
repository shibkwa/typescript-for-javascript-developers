export {}
//ユニオン型: (string | number)[]だと順序はなんでもいいので厳しくしたい
let profile: [string, number] = ['Ham', 43]

// profile = [43, "Ham"] // 順番が合わない例
