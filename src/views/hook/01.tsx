import React from "react";
export  const DemoState = (props:number) => {
    /* number为此时state读取值 ，setNumber为派发更新的函数 */
    let [number, setNumber] = React.useState(0) /* 0为初始值 */
    return (<div>
        <span>{ number }</span>
        <button onClick={ ()=> {
            setNumber(number+1)
            console.log(number) /* 这里的number是不能够即使改变的  */
        } } >+1</button>
    </div>)
}
