// 函数定义
function add3(x: number, y: number) {
  return x + y
}

function add5(x: number, y?:number) {
  return y ? x + y : x
}

// 可选参数必须在必选参数之后
function add6(x: number, y?:number) {
  return y ? x + y : x
}
add6(1)
add6(1,2)

function add7(x: number, y=0, z:number, q=1) {
  return x+y+z+q
}
// 只要后面有必选参数，那么这个参数就不能省略 必须传入undefined来让函数使用此参数的默认值
console.log(add7(1, undefined, 3))

function add8(x:number, ...rest:number[]) {
  return x + rest.reduce((prev, cur)=> prev + cur)
}
console.log(add8(1,2,3,4,5));


// 函数重载
// 静态类型语言的函数重载
// 两个函数如果名称相同但是参数个数或参数类型不同 就实现了函数重载
// 函数重载的优点：不需要为功能相似的函数使用不同的函数名称，增强了函数的可读性
// ts中的函数重载
// tsc编译器在处理重载的时候会查找一个重载列表，从前往后尝试，如果第一个符合则进入第一个，否则继续往后查找，再次匹配
// 所以最容易匹配的函数定义写在最前面，最后面需要一个最宽泛的类型
function add9(...rest: number[]):number
function add9(...rest: string[]):string
function add9(...rest: any[]): any {
  let firstParam = rest[0]
  if ( typeof firstParam === 'string' ) {
    return rest.join('index.ts')
  }
  else if ( typeof firstParam === 'number' ) {
    return rest.reduce((prev, cur)=>{
      return prev + cur
    })
  }
}
console.log(add9('a', 'b', 'c'))
console.log(add9(1,2,3));
