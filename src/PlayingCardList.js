import React from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from './hooks/useAxios'
import uuid from 'uuid'

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {

  function formatFunction(data) {
    return { id: uuid(), image: data.cards[0].image }
  };
  const [cards, addCard, clearCards] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/", formatFunction);
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard()}>Add a playing card!</button>
        {cards.length ? <button onClick={clearCards}>Clear</button> : null}
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(card => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
