
import React from 'react'
import { SearchOutlined } from'@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonSearch = (props) => {
    const{ size, placeholder, textbutton} = props
  return (
    <div style={{display: 'flex'}}>
        <InputComponent size= {size} 
        placeholder= {placeholder} 
        />;
        
        <ButtonComponent
         size= {size} 
         icon= {<SearchOutlined />}
         textbutton={textbutton}
        />
    </div>
  )
}

export default ButtonSearch