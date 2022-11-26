import React from 'react';
import {Link,Outlet} from 'react-router-dom';
import './App.css'


function App() {
  return (
    <div className="App">
       <div className='navHeader'>头部区域</div>

        <div className='content'>
            <div className='left'>
                <Link className ='link' to='/Tab1'> Tab1</Link>
                <Link className = 'link' to='/Tab2'> Tab2 </Link>
                <Link className = 'link' to='/modal'> modal </Link>
                <Link className = 'link' to='/404'> 404 </Link>
                <Link className = 'see' to='/see'>see</Link>
            </div>
            <div className='right'>
                <Outlet></Outlet>
            </div>

        </div>

    </div>
  );
}

export default App;
