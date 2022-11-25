import {useNavigate} from 'react-router-dom'
// 跳转路由

interface args{
    name?:'string'
}

export default function Tab1(props:args) {
    // navigate 应在函数式组件使用 不能在class组件内使用
    const navigate = useNavigate()
    const jump = ()=>{
        navigate('/Tab2')
    }
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2 onClick={jump}>111{props.name}</h2>
        </main>
    );
}