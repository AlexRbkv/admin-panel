import React, { useState } from 'react';
import './Sidebar.css';
import Logo from '../../images/logo.png';
import { SidebarData } from '../../data/Data.tsx';
import {UilSignOutAlt, UilBars} from "@iconscout/react-unicons";
import {motion} from 'framer-motion';

export const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    const [expanded, setExpaned] = useState(true)

    const sidebarVariants = {
        true: {
        left : '0'
        },
        false:{
        left : '-60%'
        }
    }
    return (
        <>
        <div 
            className='bars'
            style={expanded ? {left: '60%'} : {left:'5%'}}
            onClick={()=>setExpaned(!expanded)}
        >
            <UilBars />
        </div>
        <motion.div 
            className="sidebar"
            variants={sidebarVariants}
            animate={window.innerWidth<=768?`${expanded}`:''}
        >
            {/* logo */}
            <div className="logo">
                <img src={Logo} alt=""/>
                <span>
                    MySh<span>o</span>p
                </span>
            </div>

            {/* menu */}
            <div className="menu">
                {SidebarData.map((item, index) => {
                    return (
                        <div 
                            key={index}
                            className={selected === index ? "menuItem active" : "menuItem"}
                            onClick={() => setSelected(index)}    
                        >
                            <item.icon />
                            <span>{item.heading}</span>
                        </div>
                    );
                })}
                <div className="menuItem"><UilSignOutAlt /></div>
            </div>
        </motion.div>
        </>
    );
};