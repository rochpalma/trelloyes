import React from 'react';
import './list.css';
import Card from './Card';

function List(props) {
    console.log(props.cards);
    const cardsList = props.cards.map(card => {
        return (
            <Card 
                key     = {card.id}
                title   = {card.title} 
                content = {card.content} 
            />
        )
    });
        
    return(
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {cardsList}
                <button type="button" className="List-add-button">
                + Add Random Card
            </button>
            </div>
        </section>
    )
}

export default List;