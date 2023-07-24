
import {useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';
// 引入对应的方法
import {increment, decrement} from '../../store/feature/counterSlice';
import {getMovieData} from '../../store/feature/movieSlice';

function See() {
    // 通过useSelector直接拿到store中定义的value
    const {value} = useSelector((store:any)=>store.counter)
    // 通过useDispatch 派发事件
    const dispatch = useDispatch()
    // 通过useSelector直接拿到store中定义的list
    const {list} = useSelector((store:any)=>store.movie)

    // 变量
    const [amount, setAmount] = useState(1);

    return (
        <div className="See">
            <header className="See-header">
                {/* 页面中应用的代码 */}
                <p>{value}</p>
                <input value={amount} onChange={(e) => setAmount(+e.target.value)}/>
                <button onClick={()=>{dispatch(increment({value: amount,now:value}))}}>加</button>
                <button onClick={()=>{dispatch(decrement())}}>减</button>
                <button onClick={()=>{
                    // @ts-ignore
                    dispatch(getMovieData())}}>获取数据</button>
                <ul>
                    {
                        list.map((item:any,index:number)=>{ return index < 20 &&<li key={index} > {item.name?item.name:item}</li> })
                    }
                </ul>
            </header>
        </div>
    );
}

export default See;
