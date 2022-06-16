import React from 'react';
import { CostumerReview } from '../CostumerReview/CostumerReview.tsx';
import { Updates } from '../Updates/Updates.tsx';
import './RightSide.css';

export const RightSide = () => {
    return (
        <div className='RightSide'>
            <div>
                <h3>Updates</h3>
                <Updates />
            </div>
            <div>
                <h3>Costumer Review</h3>
                <CostumerReview />
            </div>
        </div>
    );
};