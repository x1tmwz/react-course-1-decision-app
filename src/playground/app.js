class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
        this.handleDeletOptions = this.handleDeletOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeletOneOption = this.handleDeletOneOption.bind(this);
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if(!options)return;
            this.setState(() => ({ options }));
        }
        catch (error) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }

    }
    componentWillUnmount() {
        console.log("switch page");

    }
    render() {
        const title = 'indecision app';
        const subTitle = 'put your life in the hand of computer';
        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action handlePick={this.handlePick} options={this.state.options} />
                <Options options={this.state.options} handleDeletOptions={this.handleDeletOptions} handleDeletOneOption={this.handleDeletOneOption} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );

    }
    handlePick() {
        if (this.state.options.length === 0) return;
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        alert(option);
    }
    handleDeletOptions() {
        this.setState((prevState) => ({ options: [] }))
    }
    handleAddOption(option) {
        if (!option) return "Unvalid option"
        if (this.state.options.indexOf(option) >= 0) return "this option is already exist";
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    handleDeletOneOption(optionToRemove) {
        this.setState((prevState) => {
            return { options: prevState.options.filter((option) => option !== optionToRemove) }
        })
    }
}
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    );
}
const Action = (props) => {
    return (
        <div>
            <button disabled={props.options.length === 0} onClick={props.handlePick}>what Shuold i DO??</button>
        </div>
    );
}
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeletOptions}>Remove All Options</button>
            {props.options.map((option) =>
                <Option
                    key={option}
                    optionText={option}
                    handleDeletOneOption={props.handleDeletOneOption} />
            )}
        </div>
    );
}
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(event) => { props.handleDeletOneOption(props.optionText) }}
            >
                remove
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(event) {
        event.preventDefault();
        const option = (event.target.elements.option.value).trim();
        const error = this.props.handleAddOption(option);
        event.target.elements.option.value = "";
        this.setState(() => ({ error }));
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>add option</button>
                </form>
            </div>
        );
    }
}
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));