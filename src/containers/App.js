import React, { useState, useEffect } from "react";

import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import './App.css'
import Scroll from '../components/Scroll';


const App = () => {
    const [acquaintances, setAcquaintances] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setAcquaintances(users))
    });

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    };

    const filteredArray = acquaintances.filter(acquaintance => {
        return acquaintance.name.toLowerCase().includes(searchfield.toLowerCase());
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

export default App;