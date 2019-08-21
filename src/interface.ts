/**
 * 接口
 */

interface ListItem {
  id: number;
  name: string;
}

interface Result {
  data: ListItem[]
}

function render(result: Result) {
  result.data.forEach((item) => {
    console.log(item.id, item.name)
  })
}

let result = {
  data: [
    {
      id: 1,
      name: 'A',
      sex: 'male'
    },
    {
      id: 2,
      name: 'B'
    }
  ]
}

render(result)

// 上面的写法是可以通过ts的类型检查的 即使data中的第一条数据多了未定义的sex
// 如果像如下的情况直接传入对象 ts就会对额外的字段进行类型检查
// render({
//   data: [
//     {
//       id: 1,
//       name: 'A',
//       sex: 'male'
//     },
//     {
//       id: 2,
//       name: 'B'
//     }
//   ]
// })

// 绕过这种类型检查的方法一共有三种
// 1. 赋值给一个变量 就是最上面的 render(result)
// 2. 类型断言 如下
render({
  data: [
    {
      id: 1,
      name: 'A',
      sex: 'male'
    },
    {
      id: 2,
      name: 'B'
    }
  ]
} as Result)  // 类型断言 明确告诉编译器这个对象就是这种类型


// 类型断言的另一种方式
// 与上面的类型断言方式是等价的，但建议使用第二种，因为这种语法在react中会产生歧义
render(<Result>{
  data: [
    {
      id: 1,
      name: 'A',
      sex: 'male'
    },
    {
      id: 2,
      name: 'B'
    }
  ]
})

// 3. 签名
// interface ListItem {
//   id: number;
//   name: string; 
//   [x: string]: any;  // 字符串索引签名 用任意字符串取索引ListItem可以得到任意的结果 所以就支持多个未知属性，可以通过类型检查了
// }

// 可选属性
// interface ListItem {
//   id: number;
//   name: string;
//   age?: string;
// }

// 只读属性
// interface ListItem {
//   readonly id: number;
//   name: string;
//   age?: string;
// }

interface StringArray {
  [index: number]: string;  // 含义：使用任意数字索引StringArray都会得到一个string 相当于声明了一个字符串数组
}
let chars: StringArray = ['a', 'b', 'c']

interface Names {
  [x: string]: string | number;   // 含义：使用任意字符串索引Names，都会得到一个string
  // y: number;  // 必须符合上面的x 所以这样的定义是不被允许的
  [z: number]: number;  // 注意这里索引返回值必须是上面x的索引返回值的子类型
}



// 定义函数类型

// 使用变量定义
let add1: (x: number, y: number) => number

// 使用接口定义
interface Add {
  (x: number, y: number): number;
}

// 使用类型别名
type AddD = (x: number, y: number) => number;


let addFunc: AddD = (a, b) => a + b




// 混合类型接口
// 定义：既可以定义一个函数 也可以像对象一样 拥有属性和方法
interface Lib {
  (): void;   // 首先是一个函数 假设这个函数没有参数也没有返回值
  version: string;  // 版本号
  doSomething(): void;
}

// 这样会向全局暴露一个变量 无法定义多个
let lib: Lib = (() => { }) as Lib
lib.version = '1.0'
lib.doSomething = () => { }

// 封装一个函数
function getLib() {
  let lib: Lib = (() => { }) as Lib
  lib.version = '1.0'
  lib.doSomething = () => { }
  return lib
}

// 创建一个实例
let lib1 = getLib()
lib1()
lib1.doSomething()
let lib2 = getLib()