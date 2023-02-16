

import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
   list:string[]
}
const initialState: CounterState = {
   list:['测试1','测试2']
};

// 创建一个 Slice
export const toDoList = createSlice({
    name: 'counter',
    initialState,
    // 定义 reducers 并生成关联的操作
    reducers: {
        // 定义一个加的方法
        addProgress: (state, {payload}) => {
             state.list.unshift(payload)

        },

        deleteProgress:(state,{payload})=>{
            state.list = state.list.splice(payload,1)
        }
    },
});
// 导出加减的方法
export const { addProgress,deleteProgress} = toDoList.actions;

// 默认导出
export default toDoList.reducer;
