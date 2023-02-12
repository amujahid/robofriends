import React from "react";

import SearchBox from './SearchBox';
import { acquaintances } from './acquaintances';
import CardList from './CardList';
import './App.css'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            acquaintances: [],
            searchfield: '',
        };
    };
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ acquaintances: users }))
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    };
    render() {

        const filteredArray = this.state.acquaintances.filter(acquaintance => {
            return acquaintance.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if(this.state.acquaintances.length==0){
            return <h1>Loading...</h1>
        }
        return (

            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList src={filteredArray} />
            </div>);
    };
};

export default App;