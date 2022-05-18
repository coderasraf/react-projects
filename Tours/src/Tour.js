import React, { useState } from 'react';

const Tour = ({tour, removeTour}) => {

  const {image, name, price, info, id} = tour;
  const [readMore, setReadMore] = useState(false)

  const handleRemove = (id) =>{
    removeTour(id)
  }

  return <article className='single-tour'>
    <img src={image} alt={name} />

    <footer>
      <div className='tour-info'>
        <h4>{ name }</h4>
        <h4 className='tour-price'>${price}</h4>
      </div>
      <p>
        {readMore ? info : `${info.substring(0, 200)} .......`}
        <button onClick={()=>{ setReadMore(!readMore) }}>
          {readMore? 'Show Less' : 'Read More'}
        </button>
      </p>
      <button onClick={() => handleRemove(id)} className='delete-btn'>Not interested</button>
    </footer>
  </article>;
};

export default Tour;
