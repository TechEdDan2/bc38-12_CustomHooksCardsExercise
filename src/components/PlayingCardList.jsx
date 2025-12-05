import React from "react";
import { v4 as uuid4 } from 'uuid';
import useAxios from "../hooks/useAxios";
import PlayingCard from "./PlayingCard";

const PlayingCardList = () => {
    const [cards, addCard] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");

    const handleAddCard = async () => {
        await addCard();
    };

    return (
        <div className="PlayingCardList">
            <h3>Pick a card, any card!</h3>
            <div>
                <button onClick={handleAddCard}>Add a playing card!</button>
            </div>
            <div className="PlayingCardList-card-area">
                {cards.map(cardData => (
                    <PlayingCard key={uuid4()} front={cardData.cards[0].image} />
                ))}
            </div>
        </div>
    );
};

export default PlayingCardList;