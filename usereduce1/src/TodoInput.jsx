import React from 'react'
import { useState } from 'react';

export const TodoInput = ({ handleAdd }) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(value){
            handleAdd(value);
            setValue('');
        }
    }

 
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
    );
};
