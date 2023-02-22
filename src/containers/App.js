import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import './App.css'
import Scroll from '../components/Scroll';
import { setSearchField } from "../actions";

const mapStateToProps=state=>{
    return{
        searchField:state.searchField
    };
}

const mapDispatchToProps=(dispatch)=>{
    return{onSearchChange:(event)=>dispatch(setSearchField(event.target.value))}
}
function App(state) {
    const [acquaintances, setAcquaintances] = useState([]);
    const [searchField,onSearchChange]=[state.searchField,state.onSearchChange]

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setAcquaintances(users))

    }, []);


    const filteredArray = acquaintances.filter(acquaintance => {
        return acquaintance.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (acquaintances.length === 0) {
        return <h1>Loading...</h1>
    }

    return (

        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <CardList src={filteredArray} />
            </Scroll>
        </div>);

};

export default connect(mapStateToProps,mapDispatchToProps)(App);