import React,{Component}  from "react";
import Clock from "./components/test";
import './tab2.css'

interface IPropsBar {
    name?: string;
    nums?:number[];
    age?:number;
    [propName: string]: any;
}
class Child extends Component<IPropsBar>{
    constructor(props:IPropsBar) {
        super(props);
    }
    render(){
        return (
            <div>
                <h1>{this.props.name}111</h1>
            </div>
        )
    }
}

function Link(props:IPropsBar){
    return <h1>网站名称：{props.name}</h1>;
}

function NumberList(props:IPropsBar){
    const numbers = props.nums!
    const Items = numbers.map((num,index)=>{
        return <div key={index}>{num}</div>
    })
    return <div>
        {Items}
    </div>
}

class Tab2 extends Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = {age:1};
        //this.tick = this.tick.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    tick(type:string){
        this.setState({
            age: type == 'add' ?this.state.age +1:this.state.age  - 1 <0 ? 0:this.state.age  - 1
        });


    }

    render() {
        const age = this.state.age
        let button = null
        if(age <=5){
            button = <Link name='小于5'></Link>
        }else{
            button = <Link name='大于等于5'></Link>
        }
        return (
            <main >
                <Child name="测试"></Child>
                <h2>{age}</h2>
                <NumberList nums={[1,2,3]}></NumberList>
                {button}
                <div className='clickDiv' onClick={() => this.tick('add')}>增加</div>
                <div className='clickDiv' onClick={() => this.tick('minus')}>减少</div>
            </main>
        );
    }
}

export default Tab2;