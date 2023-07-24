import React from 'react';
import Texts from '../components/test'
import {useNavigate} from 'react-router-dom'

interface TYPE {
    age: number;
    date?:any;
}

class Clock extends React.Component<TYPE,any> {
    constructor(props:TYPE) {
        super(props);
        this.addAge = this.addAge.bind(this)
        this.state = {
            date: new Date(),
            age:12
        };

    }

    addAge() {
        let age = this.state.age
        age++
        this.setState({ age: age})
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }



    render() {
        // const string = this.state?.date.toLocaleTimeString()
        const compUis = {
            1: () => <Texts name='1111'/>,
        };

        return (
            <div>
                <div onClick={this.addAge}>{this.state.age}</div>
                {compUis['1']()}
            </div>
        );
    }


}
export default Clock;