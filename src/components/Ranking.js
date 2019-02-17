import React from 'react';
import PropTypes from 'prop-types';

export default function Ranking({ categoryId }){
  return (
    <div>
      <h2>Ranking Component</h2>
      <p>Category ID: {categoryId}</p>
    </div>
  )
}
Ranking.propTypes = {
  categoryId: PropTypes.string
};
Ranking.defaultProps = {
  categoryId: '1'
};