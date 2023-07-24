import React ,{Component}from 'react'
import '../scss/modal.scss'

class Modal extends  Component<any, any>{

     render(){
         return (
            <div className="buttonWrap">
                <button className=" btn typeScroll">滑箱</button>
                <button className=" btn guo">果冻</button>
                <button className=" btn shine">闪光</button>
                <button className=" btn bubble">气泡</button>
            </div>

         );
     }

}


export default  Modal