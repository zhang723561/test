

import { createSlice } from '@reduxjs/toolkit';
import {message} from 'antd';

interface CounterState {
   list:task[]
}

interface task{
    name:string,
    status:boolean
}
const initialState: CounterState = {
   list:[
       {name:'测试',status:false},
       {name:'测试1',status:false},
       ]
};

// 创建一个 Slice
export const toDoList = createSlice({
    name: 'counter',
    initialState,
    // 定义 reducers 并生成关联的操作
    reducers: {
        // 定义一个加的方法
        addProgress: (state, {payload}) => {
            let target = state.list.map((item)=> { return item})
            if(target.some((item)=>item.name == payload.pro.name)){
                message.warning('重复任务')
                return
            }
             state.list = [payload.pro,...state.list]
        },

        deleteProgress:(state,{payload})=>{
            state.list =  state.list.filter((item)=>{
                return item.name !== payload.name
            })
        },

        setStatus:(state,{payload})=>{
            if(state.list[payload.num].name !== payload.name) return
            state.list[payload.num].status = !state.list[payload.num].status
        }
    },
});
// 导出加减的方法
export const { addProgress,deleteProgress,setStatus} = toDoList.actions;

// 默认导出
export default toDoList.reducer;
