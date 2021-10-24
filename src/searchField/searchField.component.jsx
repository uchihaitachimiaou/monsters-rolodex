import React from 'react';

export const SearchField=({handleChange, placeholder})=>{
  return(
    <div>
      <input type="search"
      placeholder={placeholder}
     onChange = {handleChange}
       />
    </div>
  )
}