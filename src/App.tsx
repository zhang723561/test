import React from 'react';
import {Link,Outlet} from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <div>测试</div>

        <div>
            <Link className ='link' to='/Tab1'> Tab1</Link>
            <Link className = 'link' to='/Tab2'> Tab2 </Link>
        </div>

        <Outlet></Outlet>
    </div>
  );
}

export default App;
