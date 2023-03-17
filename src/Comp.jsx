import React from 'react';
import { Simulate } from 'react-dom/test-utils';
import SlotM from './SlotMatch';


const Comp = () => {
    return(
        <>
            <h1 className='heading_style'>
                Welcome to{" "}
                <span style={{ fontWeight: "bold", color: "Blue" }}> Slot Machine Game </span>
            </h1>
            <SlotM x= '🛩️' y= '😄' z= '😄'/>
            <SlotM x= '🛩️' y= '🛩️' z= '🛩️'/>
            <SlotM x= '😄' y= '👍' z= '😸'/>
            <SlotM x= '💯' y= '💯' z= '💯'/>
        </>
    )
}

export default Comp;