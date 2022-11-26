// index.ts 文件

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./feature/counterSlice";
import movieSlice from "./feature/movieSlice";

// configureStore创建一个redux数据
const store = configureStore({
    // 合并多个Slice
    reducer: {
        counter: counterSlice,
        movie: movieSlice
    },
});

export default store;

