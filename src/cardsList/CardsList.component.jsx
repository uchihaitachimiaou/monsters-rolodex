import React from 'react';
import {Card} from '../card/Card.component';

export const CardsList =({filteredMonsters})=>{
  let monstersList = filteredMonsters.map(monster=>
    <div key={monster.id}>
      <Card monster={monster} />
    </div>
  )
  return(
    <div>
      <h2>cards list</h2>
      {monstersList}
    </div>
  )
}