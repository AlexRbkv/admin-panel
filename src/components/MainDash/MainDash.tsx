import React from 'react';
import { Cards } from '../Cards/Cards.tsx';
import { MainTable } from '../MainTable/MainTable.tsx';
import './MainDash.css';

export const MainDash = () => {
    return (
        <div className='MainDash'>
            <h1>Dashboard</h1>
            <Cards />
            <MainTable />
        </div>
    );
};