/**
 * 泛型类
 */

class LogG<T> {
  // 注意：泛型变量不能约束类的静态属性 如下的代码会报错
  // static run(value: T) {
  //   console.log(value)
  //   return value
  // }
  run(value: T) {
    console.log(value)
    return value
  }
}

// 传入类型参数时，参数类型必须符合传入的类型
let logG1 = new LogG<number>()
logG1.run(1)
// 不传入类型参数时，参数可以是任何类型
let logG2 = new LogG()
logG2.run('hahah')



// # 泛型约束

// 如下的情况 读取value.length是不合法的 因为T没有定义length属性
// function log<T>(value: T): T { 
//   console.log(value, value.length)
//   return value
// }

// 如果定义一个接口
interface Length {
  length: number
}

// T继承Length接口, 这样的话输入的参数必须具有length属性 获取value.length就是合法的了 
function log<T extends Length>(value: T): T {  
  console.log(value, value.length)
  return value
}
log('123')
log([1,2,3,4])


// 泛型的优点；

// 1. 函数和类可以轻松支持多种类型 增加程序的扩展性
// 2. 不必写多条函数重载或冗长的联合类型声明，增强代码可读性
// 3. 灵活控制类型之间的约束