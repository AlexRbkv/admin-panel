import React from 'react';
import { UpdatesData } from '../../data/Data.tsx';
import './Updates.css';

export const Updates = () => {
    return (
        <div className='Updates'>
            {UpdatesData.map((update: any, index: number) => {
                return (
                    <div key={index} className="update">
                        <img alt='' src={update.img}/>
                        <div className='noti'>
                            <div style={{marginBottom: '0.5rem'}}>
                                <span>{update.name}</span>
                                <span> {update.noti}</span>
                            </div>
                            <span>{update.time}</span>
                        </div>  
                    </div>
                );
            })}
        </div>
    );
};