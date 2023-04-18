import {useNavigate} from 'react-router-dom'
import './scss/tab1.scss'
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
    return (
        <main style={{ padding: "1rem 0" }}>
            <AlertButton message='正在播放'>see</AlertButton>
            <div className="scene">
                <div className="card">
                    <div className="card__face card__face--front">
                        <img src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg"/>
                    </div>
                    <div className="card__face card__face--back">
                        <img src="https://i.loli.net/2019/11/16/cqyJiYlRwnTeHmj.jpg"/>
                    </div>
                </div>
                <div className="card">
                    <div className="card__face card__face--front">
                        <img src="https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg"/>
                    </div>
                    <div className="card__face card__face--back">
                        <img src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg"/>
                    </div>
                </div>
                <div className="card">
                    <div className="card__face card__face--front">
                        <img src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg"/>
                    </div>
                    <div className="card__face card__face--back">
                        <img src="https://i.loli.net/2019/11/03/RtVq2wxQYySDb8L.jpg"/>
                    </div>
                </div>
            </div>
            <div id="border-btn">
                <button>Hover me</button>
            </div>
        </main>
    );
}