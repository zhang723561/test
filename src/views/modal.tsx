
import {DemoState} from './hook/01'
export default function modal() {
    const name = '123'

    return (
        <div className="modal-wrapper">
            {DemoState(0)}
            <div className="modal">
                <div className="modal-title">这是modal标题</div>
                <div className="modal-content">这是modal内容{name}</div>
                <div className="modal-operator">
                    <button className="modal-operator-close">取消</button>
                    <button className="modal-operator-confirm">确认</button>
                </div>
            </div>
            <div className="mask"></div>
        </div>
    );
}