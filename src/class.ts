/**
 * 类
 */

class Dog {
  constructor(name: string){
    this.name = name
  }
  name: string;  // 这里需要添加类型注解, 否则上面的this.name赋值时会报错
  run() {console.log('run')}
  private priRun() {console.log('private run')}
}
// 注意：typescritp/es6中类成员的属性都是实例属性而不是原型属性 类成员的方法都是实例方法

console.log('dog', Dog.prototype)  // 不包含name属性

let dog = new Dog('jenny')
console.log(dog)   // 包含name属性
dog.run()
// dog.priRun() 报错 私有方法

// 实例属性必须具有初始值或者在构造函数中被初始化
// this.name = name
// 或者
// name: string = 'dog'



// 继承
class Husky extends Dog {
  constructor(name:string, color: string){
    super(name)
    this.color = color
  }
  color: string;
}



// 类的成员修饰符
// public private protected


// public
// 类的所有属性默认都是public 对所有人都是可见的
// 也可以显式声明
// public name: string = 'dog'


// private
// 私有属性 只能在类本身被调用 而不能被类的实例调用 也不能被子类调用

// private constructor表示这个类既不能被实例化 也不能被继承
class Dog1 {
  private constructor(name: string){
    this.name = name
  }
  name: string;
}
// new Dog1()  // 报错 因为这个类不能被实例化和继承


// protected
// 受保护成员 只能在类或子类中访问 不能在实例中访问
// constructor也可以声明为protected 表示这个类不能被实例化 只能被继承 相当于声明了一个基类
class Dog2 {
  constructor(name: string){
    this.name = name
  }
  name: string;  
  protected protectedRun() {console.log('protected run');
  }
}
// new Dog2('wawa').protectedRun()  // 报错 不能在实例中访问



// 只读属性
class Dog3 {
  constructor(name: string){
    this.name = name
  }
  name: string;  
  readonly age: number = 23
  // changeAge() {this.age = 24}  // 报错 因为age是只读属性
}

// constructor参数的成员修饰 将它变成实例属性
class Dog4 {
  constructor(public name: string){  // public声明 这样就可以省略下面的类型注解
    this.name = name
  }
  // name: string;  
  protected protectedRun() {console.log('protected run');
  }
}

// static 静态成员
// 只能通过类来访问 不能通过子类访问 可以被继承
class Dog5 {
  constructor(name: string){
    this.name = name
  }
  name: string;  
  static food: string = 'bones'
}
console.log(Dog5.food)
