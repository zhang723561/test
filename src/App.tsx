import React from 'react';
import {Link,Outlet} from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <div className='navHeader'>头部区域</div>

        <div className='sidebar'>侧边栏</div>

        <div className='content'>
            <Link className ='link' to='/Tab1'> Tab1</Link>
            <Link className = 'link' to='/Tab2'> Tab2 </Link>
            <Link className = 'link' to='/modal'> modal </Link>
        </div>

        <Outlet></Outlet>
    </div>
  );
}

export default App;
