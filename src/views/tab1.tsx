import {useNavigate} from 'react-router-dom'
// 跳转路由

interface args{
    name?:'string'
}

export default function Tab1(props:args) {
    // navigate 应在函数式组件使用 不能在class组件内使用
    const navigate = useNavigate()
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>111</h2>
        </main>
    );
}