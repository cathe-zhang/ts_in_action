/**
 * 抽象类与多态
 */

// 定义抽象类
abstract class Animal {
  eat() {
    console.log('eat');
  }
  // 明确知道子类中有不同的实现 就可以只定义方法 不做具体实现 在子类中实现
  abstract sleep(): void
}

// 抽象类无法创建实例 只能继承

// let animal = new Animal()  // 无法创建抽象类实例

// 继承
class DogG extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string;
  run() {console.log('dog run');
  }
  // 抽象类中定义
  sleep() {
    console.log('dog sleep');
  }
}

let dogGExample = new DogG('rary')

// 继承抽象类的方法
dogGExample.eat()
dogGExample.sleep()


// 抽象类的优点：可以抽离出一些事物的共性，有利于代码的复用和扩展 也可以实现多态
// 多态： 在父类中定义一个抽象方法，在多个子类中有不同的实现 在程序运行时会根据不同的对象实现不同的操作 这样就实现了运行时的绑定

class Cat extends Animal {
  sleep() {
    console.log('cat sleep');
  }
}
let cat = new Cat()

let animals: Animal[] = [dogGExample, cat]

console.log('animaals foreach start');

animals.forEach(ele=>{
  ele.sleep()
})





// this
// 实现链式调用
class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}
new WorkFlow().step1().step2()

class ExpFlow extends WorkFlow {
  next() {
    // 这里的this既可以访问子类也可以访问父类
    return this
  }
}

// 这里既可以读取到子类的next方法也可以读取到父类的step方法
new ExpFlow().next().step1().next().step2()

