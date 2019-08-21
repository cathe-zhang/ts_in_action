/**
 * 接口
 */
function render(result) {
    result.data.forEach(function (item) {
        console.log(item.id, item.name);
    });
}
var result = {
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
};
render(result);
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
}); // 类型断言 明确告诉编译器这个对象就是这种类型
// 类型断言的另一种方式
// 与上面的类型断言方式是等价的，但建议使用第二种，因为这种语法在react中会产生歧义
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
});
var chars = ['a', 'b', 'c'];
