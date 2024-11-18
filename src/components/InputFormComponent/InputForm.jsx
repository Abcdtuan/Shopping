import { Input } from 'antd';
import React, { useState } from 'react';

const InputForm = ({ placeholder = "Nhập text", ...rests }) => {
    const [valueInput, setValueInput] = useState('');

    const handleChange = (e) => {
        setValueInput(e.target.value);
    };

    return (
        <Input
            style={{height:'40px'}}
            placeholder={placeholder}
            value={valueInput}
            onChange={handleChange}
            {...rests}
        />
    );
};




export default InputForm;