export function basic() {
   let a:number = 1
    // enum 普通枚举类型
    enum color{
       red=1,blue,black
    }
    // console.log(color.red)  打印值即为 red设置的值  可以设置初始值

    // 数组类型 Array
    const arr: number[] = [1,2,3]
    const arr2: Array<number> = [1,2,3];

   // void 意思就是无效的, 一般只用在函数上，告诉别人这个函数没有返回值。
    function sayHello(): void {
        console.log("hello");
    }


    // 函数定义   定义参数 返回值类型
    interface Add {
        (x: number, y: number): number;
    }
    // 可选参数 默认参数
    function add(x: number = 1, y?: number): number {
        return y ? x + y : x;
    }

    // 类型断言  我们可能比typescript更加清楚的知道某个变量的类型，所以我们可能希望手动指定一个值的类型
    let str: any = "to be or not to be";
    //let strLength: number = (<string>str).length;
    let strLength: number = (str as string).length;

}