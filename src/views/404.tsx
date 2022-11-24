import React from 'react';

class Clock extends React.Component {
    constructor(props:any) {
        super(props);
        this.state = {
            date: new Date(),
            age:'12'
        };
    }

    componentDidMount() {
        console.log('mounted')
    }

    componentWillUnmount() {
    }

    render() {
        // @ts-ignore
        const string = this.state?.date.toLocaleTimeString()
        return (
            <div>
                <h1>404!</h1>
                <h2>It is {string}</h2>
            </div>
        );
    }
}

export default Clock;