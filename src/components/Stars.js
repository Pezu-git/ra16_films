/* eslint-disable no-unreachable */
import React from 'react'
import propTypes from 'prop-types'
import Star from './Star';

 function Stars(props)  {
  const stars = props.count;
  
  if (typeof stars !== "number" || stars < 1 || stars > 5) {
    return null;
  } 

  const generateStars = [...Array(stars).keys()].map((star, starIdx) => <li key={starIdx}><Star /></li>)

  
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
