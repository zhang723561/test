import React from 'react';
import{ Suspense,lazy, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter,Routes,Route,Navigate,useNavigate} from 'react-router-dom'
import {routerItems } from './router/index'
import Tab1 from './views/tab1'
import Tab2 from './views/tab2'


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
        // @ts-ignore
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
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              {/*<Route path = '/' element = {<App/>}>*/}
              {/*    <Route path = 'Tab1' element = {<Tab1/>} />*/}
              {/*    <Route path = 'Tab2' element = {<Tab2/>} />*/}
              {/*</Route>*/}
              {rotuerViews(routerItems)}
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
