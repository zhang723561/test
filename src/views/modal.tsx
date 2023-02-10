import React ,{Component}from 'react'
import {Button} from 'antd'

const ThemeContext = React.createContext('warning')

class Modal extends  Component<any, any>{

     render(){
         return (
             <ThemeContext.Provider value="primar111y">
                 <Bar />
             </ThemeContext.Provider>
         );
     }

}

class ThemeButton extends Component<any, any>{
    constructor(props:any) {
        super(props);
    }
    static contextType = ThemeContext;
    render(){
        return(
            <ThemeContext.Consumer>
                {(theme) =>{
                    return(
                        <div>
                            <Button type={this.props.type} danger>{theme}</Button>
                        </div>
                    )
                } }
            </ThemeContext.Consumer>
        )

    }
}

function Bar(){
    return(
        <div>
            <ThemeButton type='dashed' />
        </div>
    )
}

// c错误边界
class errorBoundary extends Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = {
            hasError:false
        }
    }

    static getDerivedStateFromError(err:any){
        return { hasError: true };
    }

    componentDidCatch(error:any, errorInfo:any) {
        // 你同样可以将错误日志上报给服务器
    }

    render() {
        if (this.state.hasError) {
            // 你可以自定义降级后的 UI 并渲染
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}
// 如下使用  替代发生错误的组件渲染
// 只有 class 组件才可以成为错误边界组件。大多数情况下, 你只需要声明一次错误边界组件, 并在整个应用中使用它。
// 错误边界仅可以捕获其子组件的错误，它无法捕获其自身的错误。
// <ErrorBoundary>
//     <MyWidget />
// </ErrorBoundary>

export default  Modal