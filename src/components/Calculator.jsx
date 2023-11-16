import React from 'react'

export default function Calculator({ handleOnChange, handleOnCalculate }) {
    return (
        <div id="user-input" className='center'>
            <p>
                <label htmlFor="principal">Principal</label>
                <input type="number" id="principal" min={0} onChange={handleOnChange} />
            </p>
            <p>
                <label htmlFor="rate">Rate of Interest</label>
                <input type="number" id="rate" min={0} onChange={handleOnChange} />
            </p>
            <p>
                <label htmlFor="time">Duration</label>
                <input type="number" id="time" min={0} onChange={handleOnChange} />
            </p>
            <button onClick={handleOnCalculate}>Calculate</button>
        </div>
    );
}
