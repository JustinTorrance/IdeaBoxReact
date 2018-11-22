import React from 'react';
import IdeaCard from './IdeaCard.js';


const IdeasContainer = ({ideas, removeIdea}) => {
  const ideasCards = ideas.map(idea => <IdeaCard {...idea}
                      removeIdea={removeIdea} />)

  return (
    <div className='IdeasContainer'>
      { ideasCards }
    </div>
  )


}


export default IdeasContainer;