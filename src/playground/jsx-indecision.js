const app = {
    title: "my app",
    subtitle: "more info",
    options: []
}
let text = "";
addOption = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;
    if (!option) return;
    app.options.push(option);
    event.target.elements.option.value = "";
    render();
}
makeDecision = ()=>{
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option);
}
render = () => {
   const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>app.subtitle</p>}
            <button disabled = {app.options.length === 0} onClick={makeDecision}>make a Decision</button>
            <form onSubmit={addOption}>
                <input type="text" name="option"></input>
                <button>send!</button>
            </form>
            <p>{app.options.length > 0 ? 'here is you options' : 'No options'}</p>
            <ol>
                {app.options.map((option, index) => <li key={option}>{option}</li>)}
            </ol>
            <button onClick={() => { app.options = []; render() }}>reset list</button>
        </div>
    );
    ReactDOM.render(template, appRoot)
}



const appRoot = document.getElementById("app");
render();

