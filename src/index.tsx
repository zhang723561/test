import React from 'react';
import{ Suspense,lazy, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";

import {BrowserRouter,Routes,Route,Navigate,useNavigate} from 'react-router-dom'
import {routerItems } from './router/index'


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);



// loading页面
const Loading = () => (
    <>
        <div className='loadsvg'>
            <div>
                loading...
            </div>
        </div>
    </>
)

const rotuerViews = (routerItems: ({ path: string; Component: React.LazyExoticComponent<() => JSX.Element>; redirect: string; children: ({ path: string; Component: React.LazyExoticComponent<() => JSX.Element>; children?: undefined; } | { path: string; Component: React.LazyExoticComponent<() => JSX.Element>; children: never[]; })[]; } | { path: string; Component: React.LazyExoticComponent<() => JSX.Element>; children: never[]; redirect?: undefined; })[] | { path: any; Component: any; children: any; redirect: any; }[])=>{
    if(routerItems && routerItems.length){
        return routerItems.map(({path,Component,children,redirect})=>{
            return children && children.length ? (
                <Route path={path} key={path} element={<Suspense fallback={<Loading/>}><Component/></Suspense>}>
                    {rotuerViews(children)} // 递归遍历子路由
                    {redirect?
                        (<Route  path={path} element={<Navigate to={redirect} />}></Route>):
                        (<Route path={path} element={<Navigate to={children[0].path} />}></Route>)
                    }
                </Route>
            ):(
                <Route   key={path} path={path} element={ <Suspense fallback={<Loading/>}><Component/></Suspense>}>
                </Route>
            )
        })
    }

}

root.render(

            <BrowserRouter>
                <Routes>
                    {rotuerViews(routerItems)}
                </Routes>
            </BrowserRouter>

);
reportWebVitals();
