import React from "react";
import Card from "./Card";

const CardList = ({ src }) => {
    const acquaintances = src;


    return (
        <div>
            {
                acquaintances.map(user => {
                    return (<Card src={user} />);
                })
            }
        </div>
    );
}

export default CardList;