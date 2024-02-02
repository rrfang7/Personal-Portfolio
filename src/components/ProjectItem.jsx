import React from 'react';

function ProjectItem(props) {
  const { image, name } = props;

  return (
    <div className='projectItem'>
      <div style={{backgroundImage: `url(${image})`}} className='bgImage' />
      <h1>{name}</h1>
    </div>
  );
}

export default ProjectItem;