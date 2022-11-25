import React from 'react';
import Texts from './components/test'
import {useNavigate} from 'react-router-dom'
import Tab1 from './tab1'

interface TYPE {
    age: number;
    date?:any;
}

class Clock extends React.Component<TYPE,any> {
    constructor(props:TYPE) {
        super(props);
        this.addAge = this.addAge.bind(this)
        this.getTime = this.getTime.bind(this)
        this.state = {
            date: new Date(),
            age:12
        };

    }

    // 创建额外变量
    timer:any



    addAge() {
        let age = this.state.age
        age++
        this.setState({ age: age})
    }

    getTime(){
        this.setState({ date: new Date()})
    }
    componentDidMount() {
       this.timer =   setInterval(()=>{
            this.getTime()
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }



    render() {
        const string = this.state?.date.toLocaleTimeString()
        const compUis = {
            1: () => <Texts name='1111'/>,
        };

        return (
            <div>
                <Tab1 name={string}></Tab1>
                <h2>It is {new Date().toLocaleTimeString()}</h2>
                {/*onClick={(e) => this.deleteRow(id, e)}*/}
                <div onClick={this.addAge}>{this.state.age}</div>
                {compUis['1']()}
            </div>
        );
    }


}
export default Clock;