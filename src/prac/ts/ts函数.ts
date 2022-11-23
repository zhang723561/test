

export  function learn(){

    //`Pick<T, K extends keyof T>` 的作用是将某个类型中的子属性挑出来，变成包含这个类型部分属性的子类型
    type Pick<T, K extends keyof T> = { [P in K]: T[P]; };

    interface Todo {
        title: string;
        description: string;
        completed: boolean;

    }

    type TodoPreview = Pick<Todo, "title" | "completed">;
    const todo: TodoPreview = {
        title: "Clean room",
        completed: false,
    };


    //               类型规定      参数区域            返回规定
    function identity <T, U>(value: T, message: U) : T {
        console.log(message);
        return value;
    }
    // T规定参数一 返回值的类型  U规定了参数二的类型
    console.log(identity<Number, string>(68, "Semlinker"));



    // 泛型工具类型
    // typeof   typeof 操作符可以用来获取一个变量声明或对象的类型。
    interface Person {
        name: string;
        age: number;
    }

    const sem: Person = { name: 'semlinker', age: 33 };
    type Sem= typeof sem; // -> Person

    function toArray(x: number): Array<number> {
        return [x];
    }

    type Func = typeof toArray; // -> (x: number) => number[]



    //keyof  ，该操作符可以用于获取某种类型的所有键，其返回类型是联合类型。


    //in 用来遍历枚举类型：
    type Keys = "a" | "b" | "c"

    type Obj =  {
        [p in Keys]: any
    } // -> { a: any, b: any, c: any }


    // Partial<T> 的作用就是将某个类型里的属性全部变为可选项 ?。

    // infer 声明一个类型变量并且对它进行使用

    // 可以用 Parameters ，ReturnType 来从方法的类型上提取参数类型和返回值类型。
}

