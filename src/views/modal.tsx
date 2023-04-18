import React ,{Component}from 'react'
import {Button} from 'antd'

const ThemeContext = React.createContext('warning')

class Modal extends  Component<any, any>{

     render(){
         return (
             <ThemeContext.Provider value="primar111y">
                 <Bar />
             </ThemeContext.Provider>
         );
     }

}

class ThemeButton extends Component<any, any>{
    constructor(props:any) {
        super(props);
    }
    static contextType = ThemeContext;
    render(){
        return(
            <ThemeContext.Consumer>
                {(theme) =>{
                    return(
                        <div>
                            <Button type={this.props.type} danger>{theme}</Button>
                        </div>
                    )
                } }
            </ThemeContext.Consumer>
        )

    }
}

function Bar(){
    return(
        <div>
            <ThemeButton type='dashed' />
        </div>
    )
}


export default  Modal