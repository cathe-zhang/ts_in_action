/**
 * 枚举
 */

// 数字枚举
enum Role {
  Guest = 1,  // 可指定数字
  Reporter = 3,  // 往后数字递增
  Developer,
  Maintainer,
  Owner,
}
console.log(Role.Developer)  // 4 因为Reporter设置了值为3 往后递增 所以Developer的值是4
console.log(Role[5])  // Maintainer 可反向取值
// ts的数字枚举其实就是将对象的值再次作为键，赋值对应的键，相当于一个对象的本身扩展了它的反向映射

// 字符串枚举
enum Message {
  Success = '恭喜你，成功了',
  Fail = '对不起，失败了'
}
console.log(Message.Success)
// 字符串枚举不会做反向映射，所以无法反向取值

// 异构枚举
enum Answer {
  N,
  Y = 'YES'
}
// 异构枚举中的数值会做反向映射，字符串不会

// 枚举成员的值是只读类型 无法修改

// 以下的枚举值都是合法的，最终的值会取计算出来的值
enum Char {
  // const member 常量枚举值 值会在编译阶段就被计算出来
  a,
  b = 1 + 3,
  c = Char.a,
  // computed member 计算枚举值 值在编译阶段不会被计算，会被保留到执行阶段
  d = Math.random(),
  e = '123'.length,
  // computed member之后的枚举值必须要赋予一个初始值 否则无法通过编译
  f = 4
}
console.log(Char)  // 只有cdef会被反向映射 因为ab的值和后面的值是相等的，在反向映射时会被忽略


// 常量枚举
const enum Month {
  JAN,
  FEB,
  MAR
}
// 常量枚举在编译时会被忽略
// 用途： 当不需要对象 只需要对象的值时就可以使用常量枚举，可以减少编译环境的代码
let MonthList = [Month.JAN, Month.FEB, Month.MAR]
// 以下是上面语句的编译结果 枚举键被保存成了注释 没有将它编译成对象
// var MonthList = [0 /* JAN */, 1 /* FEB */, 2 /* MAR */];

// 枚举类型

// 总结：将程序中不容易记忆的硬编码或者未来可能改变的常量抽取出来变为枚举类型 可以提升代码的可读性