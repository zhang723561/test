
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addProgress} from '../../store/feature/toDoList'
import {Button,Input} from 'antd'
import DownList from './component/downList'
import './todo.scss'

function Todo(){

    const dispatch = useDispatch()
    const [message, setMessage] = useState('');

    function add(){
        if(message){
            dispatch(addProgress({pro:{name:message,status:false}}))
            setMessage('')
        }
    }
    function handleChange(e:any){
        setMessage(e.target.value)
    }

    return(
        <div>
            <div className='addWrap'>
                <Input placeholder='请输入' allowClear value={message} onChange={handleChange}></Input>
                <Button type='primary' onClick={add}>新增</Button>
            </div>
            <DownList></DownList>
        </div>


    )
}


export default Todo