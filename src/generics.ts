/**
 * 泛型
 */

// 泛型：不预先确定的数据类型，具体的类型在使用时才能确定

// 普通定义方式
// function log(value: any): any {
//   console.log(value);
//   return value
// }

// 使用泛型改造上面的函数
// 类型T不需要预先指定 相当于any类型
// 保证输入类型和返回值类型是一致的 弥补了any类型的缺点
function log<T>(value: T): T {
  console.log(value);
  return value
}

// 在调用的时候指定T的类型
log<string[]>(['a','b'])

// 也可以利用ts的类型推断 直接传入参数即可
log(['a', 'b'])


// 不仅可以用泛型定义函数 也可以定义函数类型
// type Log = <T>(value: T) => T
// let myLog: Log = log  // 实现 因为log函数是符合Log的函数类型定义的 所以可以直接指定 也可以定义任意符合Log类型的函数


// 泛型接口 同上面的type定义方式
interface Log {
  <T>(value: T): T
}
// 这种方式泛型仅约束了一个函数
// 如下 将泛型变量放到接口名之后 此接口的所有属性都可以受到泛型变量的约束了
interface Log1<T> {
  (value: T): T
}

// 注意：当泛型约束了整个接口时，在实现时需要指定类型
let myLog1: Log1<number> = log

// 也可以在接口定义中指定一个默认的类型
interface Log2<T = string> {
  (value: T): T
}
// 这样在实现时就可以不用定义类型了
let myLog2: Log2 = log


// 理解： 将泛型变量与函数的参数等同对待 泛型变量只是另一个维度的参数，代表类型而不是代表值