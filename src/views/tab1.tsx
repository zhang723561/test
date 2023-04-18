import {useNavigate} from 'react-router-dom'
// 跳转路由

interface args{
    name?:string
}

interface alertArgs {
    message :string,
    children:string
}

function AlertButton({ message, children}:alertArgs) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

// onClick={e => e.stopPropagation()}  阻止默认传播
// e.preventDefault() 阻止默认行为

export default function Tab1(props:args) {
    // navigate 应在函数式组件使用 不能在class组件内使用
    const navigate = useNavigate()
    function handleClick(){
        console.log('点击事件')
    }
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2 onClick={handleClick}>111</h2>
            <AlertButton message='正在播放'>see</AlertButton>
        </main>
    );
}