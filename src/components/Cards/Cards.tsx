import React from 'react';
import './Cards.css';
import { cardsData } from '../../data/Data.tsx';
import { Card } from '../Card/Card.tsx';

export const Cards = () => {
    return (
        <div className="Cards">
            {
                cardsData.map((card, id) => {
                    return (
                        <div className="parentContainer" key={id}>
                            <Card 
                                title={card.title}
                                color={card.color}
                                barValue={card.barValue}
                                value={card.value}
                                png={card.png}
                                series={card.series}
                            />
                        </div>
                    )
                })
                
            }
        </div>
    );
};