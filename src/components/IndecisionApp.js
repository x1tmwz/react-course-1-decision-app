import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import React from 'react';
import OptionMoadl from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectOption: undefined
    };
    handlePick = () => {
        if (this.state.options.length === 0) return;
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const selectOption = this.state.options[randomNumber];
        this.setState(() => ({ selectOption }))
    };
    handleDeletOptions = () => {
        this.setState(() => ({ options: [] }))
        console.log(this.state);
    };
    handleAddOption = (option) => {
        if (!option) return "Unvalid option"
        if (this.state.options.indexOf(option) >= 0) return "this option is already exist";
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    };
    handleDeletOneOption = (optionToRemove) => {
        this.setState((prevState) => {
            return { options: prevState.options.filter((option) => option !== optionToRemove) }
        })
    };
    handleRestartPick = () => {
        this.setState(() => ({ selectOption: undefined }))
    };
    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (!options) return;
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
                <div className="container">
                    <Action handlePick={this.handlePick} options={this.state.options} />
                    <div className="widget">
                        <Options options={this.state.options} handleDeletOptions={this.handleDeletOptions} handleDeletOneOption={this.handleDeletOneOption} />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionMoadl selectOption={this.state.selectOption} handleRestartPick={this.handleRestartPick} />
            </div>
        );

    }

}