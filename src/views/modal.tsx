
import {DemoState} from './hook/01'
export default function modal() {
    const name = '123'

    return (
        <div className="modal-wrapper">
            {DemoState(0)}
            <div className="modal">
                <div className="modal-title">这是modal标题</div>
                <div className="modal-content">这是modal内容{name}</div>
            </div>
            <div className="mask"></div>
        </div>
    );
}