
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import toDoList, {deleteProgress,setStatus} from '../../../store/feature/toDoList'
import {Button} from 'antd'
import './list.scss'


function Todo(){
    let filter = 'all'
    const {list} = useSelector((store:any)=>store.toDoList)
    const dispatch = useDispatch()
    const finished = list.filter((item:any)=>item.status).length
    const unfinished = list.filter((item:any)=>!item.status).length
    return(
        <div className='out'>
            <div className='listWrap'>
                {
                    list.map((item:any,index:number)=>{
                        return   <div key={index}  onClick={()=>{dispatch(setStatus({num:index}))}}
                                      className={item.status ? 'finished line':'line'}
                        >
                        <span className={item.status?'task finish':'task'}>{item.name}</span>
                        {
                            item.status ?
                                <Button type='primary' className='delBtn'>已完成</Button>
                                :
                                <Button type='primary' danger className='delBtn' onClick={()=>{dispatch(deleteProgress({name:item.name}))}}>删除</Button>
                        }

                    </div> })
                }
            </div>
            <div className='under'>
                <span>当前任务: {list.length}</span>
                <span>已完成:{finished}</span>
                <span>未完成:{unfinished}</span>
            </div>
        </div>

    )
}


export default Todo