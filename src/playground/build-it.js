class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visibility: true };
        this.hide = this.hide.bind(this);
    }
    render() {
        return (
            <div>
                <h1>information</h1>
                <button onClick={this.hide}>{this.state.visibility ? "show information" : "hide information"}</button>
                {this.state.visibility || <p> my secret password is pizza</p>}
            </div>
        );
    }
    hide(){
        this.setState((prevState)=>{
            prevState.visibility= !prevState.visibility;
            return prevState;
        });
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))