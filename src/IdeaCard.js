import React from 'react';

const IdeaCard = ({name, description, id, removeIdea}) => (
  <div className='IdeaCard'>
    <h1>{name}</h1>
    <p>{description}</p>
    <button onClick={() => removeIdea(id)}>Remove</button>
  </div>
  )


export default IdeaCard;