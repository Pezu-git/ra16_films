/* eslint-disable no-unreachable */
import React from 'react'
import propTypes from 'prop-types'
import Star from './Star';



  
 function Stars(props)  {
  const stars = props.count;
  const generateStars = [...Array(stars).keys()].map(star => <Star key={Math.random()}/>)

  if (typeof stars !== "number" || stars < 1 || stars > 5) {
    return null;
  } 
  return (
    <ul className="card-body-stars u-clearfix">
      {generateStars}
    </ul>
  );
  
}

Stars.defaultProps = {
  count: 0,
}

Stars.propTypes = {
  count: propTypes.number,
}

export default Stars
