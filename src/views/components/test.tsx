import React from 'react';

interface IPropsBar {
    name: string;
}

class Clock extends React.Component<IPropsBar,any> {
    constructor(props:IPropsBar) {
        super(props);
        this.state = {
            name:props.name
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }

    render() {

        return (
            <div>
                <h2>It is {this.state.name}</h2>
            </div>
        );
    }


}
export default Clock;