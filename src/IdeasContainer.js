import React from 'react';
import IdeaCard from './IdeaCard.js';


const IdeasContainer = ({ideas}) => {
  const ideasCards = ideas.map(idea => <IdeaCard {...idea} />)

  return (
    <div className='IdeasContainer'>
      { ideasCards }
    </div>
  )


}


export default IdeasContainer;