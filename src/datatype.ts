/**
 * 数据类型
 */

// 原始类型
let str: string = 'abc'
let num: number | undefined | null = 123  // 声明联合类型 赋值为null和undefined时就不会报错了
let bool: boolean = true
num = null

// 数组
let arr1: number[] = [1,2,3]
let arr2: Array<number> = [1,2,3]

// 联合类型
let arr3: Array<number|string> = [1,2,3,'4']


// 元组
let tuple: [number, string] = [0, 'a']
tuple.push(3)   // 可以push但无法访问 所以是没有意义的 不建议使用

// 函数
let func = (x:number, y:number):number => x + y
// ts有类型推断 可以省略返回值的类型定义
let add = (x:number, y:number) => x + y

let compute: (x:number, y:number) => number   // 函数类型定义
compute = (a, b) => a + b  // 实际定义时参数名可以不必遵循定义

// 对象
let obj: Object = {x: 1, y: 2}
// obj.x = 3  // Property 'x' does not exist on type 'Object'.
let obj1: {x:number, y:number} = {x: 1, y:2}
obj1.x = 3

// symbol
let s1: symbol = Symbol()
console.log(s1)

// undefined null
let ud: undefined = undefined
let nl: null = null
// 不能被赋值为其他类型
// undefined和null是其他所有类型的子类型

// void 没有任何返回值
let noReturn = () => {}
console.log(noReturn);

// any  可以任意赋值
let x
x = 3
x = []
x = 'a'
x = () => {}

// never 永远不会有返回值的类型
let error = () => {
  throw new Error('error');
}