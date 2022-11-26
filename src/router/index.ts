
import{lazy} from 'react';

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
                children:[],
            },
            {
                path:'modal',
                Component:lazy(()=>import('../views/modal')),
                children:[],
            },
            {
                path:'see',
                Component:lazy(()=>import('../views/see')),
                children:[],
            },
            {
                path:'*',
                Component:lazy(()=>import('../views/404')),
                children:[]
            }
        ]
    },


]