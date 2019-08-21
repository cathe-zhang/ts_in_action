/**
 * 类实现接口
 */

interface Human {
  name: string;
  age: number;
  eat(): void;
}

// 类实现接口时必须实现接口中声明的所有属性
// 可以定义接口未声明的属性
// 接口只能约束类的公有成员 private name: string 就会报错
// 接口不能约束类的构造函数
class Asain implements Human {
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  name: string;
  age: number;
  eat() {
    console.log('asian eat');
  }
}

// 接口继承
// 一个接口可以继承多个接口
interface Man extends Human {
  run(): void;
}

interface Woman extends Human {
  walk(): void;
}

interface Child extends Human {
  cry(): void;
}

// 继承多个接口 用逗号分割
interface Boy extends Man, Child {}

// 接口的继承 可以抽离出可重用的接口 也可以继承多个接口

let boy: Boy = {
  name: 'jack',
  age: 1,
  eat() {
    console.log('jack eat');
  },
  run() {
    console.log('jack run');
  },
  cry() {
    console.log('jack cry');
  }
}


// 接口继承类
// 抽象出类的成员 只有类的成员结构 而没有具体的实现
class Auto {
  state = 1
  // private pri = 2
}

// 接口继承类
interface AutoInterface extends Auto {

}

// 类实现接口 必须定义接口继承的类的属性
class AutoMobile implements AutoInterface {
  state = 2
  // pri = 2  这里有矛盾 如果Auto中定义了私有成员pri AutoInterfce继承了Auto的私有成员pri AutoMobile实现了接口AutoInterface 所以它必须定义AutoInterface的属性 但是AutoMobile又不是Auto的子类 不能包含Auto的非公有成员 所以如果Auto中定义了私有成员pri 就不能这样实现了
}

// 因为Bus已经继承了Auto的state属性 所以不需要再定义了
// 注意：接口在抽离类的成员时 不仅抽离了类的公有成员 也抽离了类的私有成员和受保护成员
class Bus extends Auto implements AutoInterface {

}




// 总结
// 接口可以互相继承
// 类可以互相继承
// 接口可以抽离出类的所有成员(包括private protected public)
// 类可以通过implements实现接口 但接口只能约束类的公有成员
// 可以画一张图