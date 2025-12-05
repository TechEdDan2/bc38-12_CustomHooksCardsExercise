import React from "react";
import PlayingCardList from "./PlayingCardList";
import PokeDex from "./PokeDex";
import "./CardTable.css";


const CardTable = () => {
    return (
        <div className="CardTable">
            <header>
                <h1 className="CardTable-heading">Check out all my cards.</h1>
            </header>
            <main>
                <div>
                    <PokeDex />
                </div>
                <div>
                    <PlayingCardList />
                </div>

            </main>
        </div>
    );

}

export default CardTable;