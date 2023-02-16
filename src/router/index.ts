
import{lazy} from 'react';

// @ts-ignore
export const routerItems  = [
    {
        path:'/',
        Component:lazy(()=>import('../App')),
        redirect:'/Tab1',
        children:[
            {
                path:'Tab1',
                Component:lazy(()=>import('../views/tab1')),
            },
            {
                path:'Tab2',
                Component:lazy(()=>import('../views/tab2')),
            },
            {
                path:'modal',
                Component:lazy(()=>import('../views/modal')),
            },
            {
                path:'todo',
                Component:lazy(()=>import('../views/todo/toDo')),
            },
            {
                path:'see',
                Component:lazy(()=>import('../views/see')),
            },
            {
                path:'*',
                Component:lazy(()=>import('../views/404')),
            }
        ]
    },


]