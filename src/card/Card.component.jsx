import React from 'react';

export const Card =({monster})=> {
  return(
    <div>
      <h3>{monster.name}</h3>
      <img src={`https://robohash.org/${monster.id}?set_set3&size=180x180`} alt="" />
      <p>{`username: ${monster.username}`}</p>
    </div>
  )
}