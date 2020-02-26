
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0};
        this.pluse1 = this.pluse1.bind(this);
        this.minus1 = this.minus1.bind(this);
        this.reset = this.reset.bind(this);
    }
    componentDidMount(){
        const data = localStorage.getItem('count');
        const count = parseInt(data,10);
        if(isNaN(count))return;
        this.setState(()=>({count}));
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.count !== prevState.count){
            localStorage.setItem('count',this.state.count);
        }
    }
    comopnentWillUnmount(){

    }
    render() {
        return (
            <div>
                {this.state.name}
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.pluse1}>+1</button>
                <button onClick={this.minus1}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
    pluse1() {  
        this.setState((prevState)=> ({count:prevState.count+1}));
    }
    minus1() {
        this.setState((prevState)=> ({count:prevState.count-1}));
    }
    reset() {
        this.setState(()=>({count:0}));
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"));